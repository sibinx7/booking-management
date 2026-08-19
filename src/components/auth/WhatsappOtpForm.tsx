'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useSendWhatsappOtpMutation,
  useVerifyWhatsappOtpMutation,
} from '@/store/api/authApi';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';

const phoneValidationSchema = Yup.object().shape({
  countryCode: Yup.string().required('Country code is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{7,15}$/, 'Enter a valid phone number (7 to 15 digits)')
    .required('Phone number is required'),
});

const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^[0-9]{6}$/, 'OTP must be exactly 6 digits')
    .required('Please enter the 6-digit OTP sent to WhatsApp'),
});

const countryCodes = [
  { code: '+1', label: 'US/CA (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+91', label: 'IN (+91)' },
  { code: '+61', label: 'AU (+61)' },
  { code: '+49', label: 'DE (+49)' },
  { code: '+33', label: 'FR (+33)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+65', label: 'SG (+65)' },
  { code: '+66', label: 'TH (+66)' },
  { code: '+62', label: 'ID/Bali (+62)' },
];

export default function WhatsappOtpForm() {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [resendCountdown, setResendCountdown] = useState<number>(0);

  const [sendWhatsappOtp, { isLoading: isSendingOtp }] = useSendWhatsappOtpMutation();
  const [verifyWhatsappOtp, { isLoading: isVerifyingOtp }] = useVerifyWhatsappOtpMutation();

  // Countdown timer for OTP resend
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setInterval(() => {
      setResendCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCountdown]);

  // Phone Formik
  const phoneFormik = useFormik({
    initialValues: {
      countryCode: '+91',
      phoneNumber: '',
    },
    validationSchema: phoneValidationSchema,
    onSubmit: async (values) => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        const response = await sendWhatsappOtp(values).unwrap();
        setSuccessMessage(response.message || `Sanctuary code sent to WhatsApp: ${values.countryCode} ${values.phoneNumber}`);
        setStep('otp');
        setResendCountdown(30);
      } catch (err: unknown) {
        const apiError = err as { data?: { message?: string }; message?: string };
        setErrorMessage(
          apiError.data?.message || apiError.message || 'Failed to send WhatsApp OTP. Please check the number.'
        );
      }
    },
  });

  // OTP Formik
  const otpFormik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: otpValidationSchema,
    onSubmit: async (values) => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        const response = await verifyWhatsappOtp({
          countryCode: phoneFormik.values.countryCode,
          phoneNumber: phoneFormik.values.phoneNumber,
          otp: values.otp,
        }).unwrap();

        if (response.token && response.user) {
          dispatch(setCredentials({ user: response.user, token: response.token }));
          setSuccessMessage(response.message || 'Verified! Welcome to Anahata Spa.');
        } else {
          setSuccessMessage('Verified! Welcome to Anahata Spa.');
        }
      } catch (err: unknown) {
        const apiError = err as { data?: { message?: string }; message?: string };
        setErrorMessage(
          apiError.data?.message || apiError.message || 'Invalid or expired OTP code. Please try again.'
        );
      }
    },
  });

  const handleResendOtp = async () => {
    if (resendCountdown > 0) return;
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      await sendWhatsappOtp({
        countryCode: phoneFormik.values.countryCode,
        phoneNumber: phoneFormik.values.phoneNumber,
      }).unwrap();
      setSuccessMessage('New sanctuary verification code sent to your WhatsApp!');
      setResendCountdown(30);
    } catch (err: unknown) {
      const apiError = err as { data?: { message?: string }; message?: string };
      setErrorMessage(apiError.data?.message || 'Failed to resend OTP.');
    }
  };

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger d-flex align-items-center py-2 px-3 mb-3 border-0 shadow-sm" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <div className="small">{errorMessage}</div>
        </div>
      )}

      {successMessage && (
        <div className="alert alert-success d-flex align-items-center py-2 px-3 mb-3 border-0 shadow-sm" role="alert">
          <i className="bi bi-whatsapp me-2 text-success fs-5"></i>
          <div className="small">{successMessage}</div>
        </div>
      )}

      {step === 'phone' ? (
        <form onSubmit={phoneFormik.handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label small fw-semibold" style={{ color: '#182e26' }}>
              WhatsApp Phone Number
            </label>
            <div className="input-group">
              <select
                id="countryCode"
                name="countryCode"
                className="form-select flex-grow-0"
                style={{ width: '120px' }}
                value={phoneFormik.values.countryCode}
                onChange={phoneFormik.handleChange}
                disabled={isSendingOtp}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="9876543210"
                className={`form-control ${
                  phoneFormik.touched.phoneNumber && phoneFormik.errors.phoneNumber ? 'is-invalid' : ''
                }`}
                value={phoneFormik.values.phoneNumber}
                onChange={phoneFormik.handleChange}
                onBlur={phoneFormik.handleBlur}
                disabled={isSendingOtp}
                autoComplete="tel-national"
              />
              {phoneFormik.touched.phoneNumber && phoneFormik.errors.phoneNumber && (
                <div className="invalid-feedback d-block">{phoneFormik.errors.phoneNumber}</div>
              )}
            </div>
            <div className="form-text text-muted small mt-1">
              <i className="bi bi-shield-check me-1 text-success"></i>
              Instant passwordless sign-in code sent directly via WhatsApp.
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-spa-primary w-100 py-3 fw-semibold d-flex align-items-center justify-content-center shadow-sm"
            disabled={isSendingOtp}
          >
            {isSendingOtp ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending WhatsApp Sanctuary Code...
              </>
            ) : (
              <>
                <i className="bi bi-whatsapp me-2 fs-5 text-success"></i>
                Send Code via WhatsApp
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={otpFormik.handleSubmit} noValidate>
          <div className="p-3 bg-light rounded-3 mb-3 border">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted small">Sanctuary code sent to: </span>
                <strong className="small text-dark">
                  {phoneFormik.values.countryCode} {phoneFormik.values.phoneNumber}
                </strong>
              </div>
              <button
                type="button"
                className="btn btn-link btn-sm p-0 text-decoration-none fw-semibold"
                style={{ color: '#c5a880' }}
                onClick={() => {
                  setStep('phone');
                  otpFormik.resetForm();
                  setErrorMessage(null);
                }}
              >
                Change Number
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="otp" className="form-label small fw-semibold" style={{ color: '#182e26' }}>
              Enter 6-digit WhatsApp Code
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="123456"
              className={`form-control form-control-lg text-center fw-bold ${
                otpFormik.touched.otp && otpFormik.errors.otp ? 'is-invalid' : ''
              }`}
              value={otpFormik.values.otp}
              onChange={otpFormik.handleChange}
              onBlur={otpFormik.handleBlur}
              disabled={isVerifyingOtp}
              autoFocus
            />
            {otpFormik.touched.otp && otpFormik.errors.otp && (
              <div className="invalid-feedback d-block">{otpFormik.errors.otp}</div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted small">Didn&apos;t receive the code?</span>
            <button
              type="button"
              className="btn btn-link btn-sm p-0 text-decoration-none fw-medium"
              style={{ color: '#2a4d40' }}
              onClick={handleResendOtp}
              disabled={resendCountdown > 0 || isSendingOtp}
            >
              {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend WhatsApp Code'}
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-spa-primary w-100 py-3 fw-semibold d-flex align-items-center justify-content-center shadow-sm"
            disabled={isVerifyingOtp || !otpFormik.isValid}
          >
            {isVerifyingOtp ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Verifying Sanctuary Code...
              </>
            ) : (
              <>
                <i className="bi bi-flower1 me-2"></i>
                Verify & Enter Sanctuary
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
