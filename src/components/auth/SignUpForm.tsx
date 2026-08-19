'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useRegisterUserMutation,
  useSendEmailOtpMutation,
  useVerifyEmailOtpMutation,
  useSendWhatsappOtpMutation,
  useVerifyWhatsappOtpMutation,
} from '@/store/api/authApi';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';
import type { RegisterRequest } from '@/types/auth';

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

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<'details' | 'verify_otp'>('details');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [emailTimer, setEmailTimer] = useState(0);
  const [phoneTimer, setPhoneTimer] = useState(0);

  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);

  const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();
  const [sendEmailOtp, { isLoading: isSendingEmailOtp }] = useSendEmailOtpMutation();
  const [verifyEmailOtp, { isLoading: isVerifyingEmailOtp }] = useVerifyEmailOtpMutation();
  const [sendWhatsappOtp, { isLoading: isSendingPhoneOtp }] = useSendWhatsappOtpMutation();
  const [verifyWhatsappOtp, { isLoading: isVerifyingPhoneOtp }] = useVerifyWhatsappOtpMutation();

  useEffect(() => {
    if (emailTimer <= 0) return;
    const interval = setInterval(() => setEmailTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [emailTimer]);

  useEffect(() => {
    if (phoneTimer <= 0) return;
    const interval = setInterval(() => setPhoneTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [phoneTimer]);

  const formik = useFormik<RegisterRequest>({
    initialValues: {
      name: '',
      email: '',
      countryCode: '+91',
      phoneNumber: '',
      password: '',
      registrationMode: 'both',
      agreeTerms: false,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Full name is required'),
      registrationMode: Yup.string().required(),
      email: Yup.string().when('registrationMode', {
        is: (mode: string) => mode === 'both' || mode === 'email_only',
        then: (schema) =>
          schema.email('Please enter a valid email address').required('Email is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
      phoneNumber: Yup.string().when('registrationMode', {
        is: (mode: string) => mode === 'both' || mode === 'phone_only',
        then: (schema) =>
          schema
            .matches(/^[0-9]{7,15}$/, 'Phone number must be between 7 and 15 digits')
            .required('Phone number is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      agreeTerms: Yup.boolean().oneOf(
        [true],
        'You must accept the sanctuary terms and conditions to register'
      ),
    }),
    onSubmit: async (values) => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        await registerUser(values).unwrap();

        if (values.registrationMode === 'both' || values.registrationMode === 'email_only') {
          if (values.email) {
            await sendEmailOtp({ email: values.email }).unwrap();
            setEmailTimer(30);
          }
        }

        if (values.registrationMode === 'both' || values.registrationMode === 'phone_only') {
          if (values.phoneNumber && values.countryCode) {
            await sendWhatsappOtp({
              countryCode: values.countryCode,
              phoneNumber: values.phoneNumber,
            }).unwrap();
            setPhoneTimer(30);
          }
        }

        setSuccessMessage('Sanctuary registration initiated! Please enter the verification codes.');
        setStep('verify_otp');
      } catch (err: unknown) {
        const apiErr = err as { data?: { message?: string }; message?: string };
        setErrorMessage(
          apiErr.data?.message || apiErr.message || 'Registration failed. Please check your information.'
        );
      }
    },
  });

  const otpFormik = useFormik({
    initialValues: {
      emailOtp: '',
      phoneOtp: '',
    },
    validationSchema: Yup.object().shape({
      emailOtp: Yup.string().when([], {
        is: () => formik.values.registrationMode === 'both' || formik.values.registrationMode === 'email_only',
        then: (schema) =>
          schema.matches(/^[0-9]{6}$/, 'Email OTP must be 6 digits').required('Email OTP is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
      phoneOtp: Yup.string().when([], {
        is: () => formik.values.registrationMode === 'both' || formik.values.registrationMode === 'phone_only',
        then: (schema) =>
          schema.matches(/^[0-9]{6}$/, 'Phone OTP must be 6 digits').required('Phone OTP is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),
    onSubmit: async (values) => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        if (
          (formik.values.registrationMode === 'both' || formik.values.registrationMode === 'email_only') &&
          !emailOtpVerified &&
          formik.values.email
        ) {
          const res = await verifyEmailOtp({
            email: formik.values.email,
            otp: values.emailOtp,
          }).unwrap();
          if (res.success) {
            setEmailOtpVerified(true);
          }
        }

        if (
          (formik.values.registrationMode === 'both' || formik.values.registrationMode === 'phone_only') &&
          !phoneOtpVerified &&
          formik.values.phoneNumber &&
          formik.values.countryCode
        ) {
          const res = await verifyWhatsappOtp({
            countryCode: formik.values.countryCode,
            phoneNumber: formik.values.phoneNumber,
            otp: values.phoneOtp,
          }).unwrap();
          if (res.success) {
            setPhoneOtpVerified(true);
          }
        }

        const mockToken = 'jwt_token_' + Date.now();
        dispatch(
          setCredentials({
            token: mockToken,
            user: {
              id: 'usr_' + Date.now(),
              name: formik.values.name,
              email: formik.values.email,
              phoneNumber: formik.values.countryCode
                ? `${formik.values.countryCode} ${formik.values.phoneNumber}`
                : undefined,
            },
          })
        );
        setSuccessMessage('Welcome to Anahata Spa Sanctuary! Your account is verified.');
      } catch (err: unknown) {
        const apiErr = err as { data?: { message?: string }; message?: string };
        setErrorMessage(
          apiErr.data?.message || apiErr.message || 'Verification failed. Please try again.'
        );
      }
    },
  });

  const handleResendEmailOtp = async () => {
    if (emailTimer > 0 || !formik.values.email) return;
    try {
      await sendEmailOtp({ email: formik.values.email }).unwrap();
      setEmailTimer(30);
      setSuccessMessage('A new verification code was sent to your email.');
    } catch {
      setErrorMessage('Failed to resend Email code.');
    }
  };

  const handleResendPhoneOtp = async () => {
    if (phoneTimer > 0 || !formik.values.phoneNumber || !formik.values.countryCode) return;
    try {
      await sendWhatsappOtp({
        countryCode: formik.values.countryCode,
        phoneNumber: formik.values.phoneNumber,
      }).unwrap();
      setPhoneTimer(30);
      setSuccessMessage('A new verification code was sent to your WhatsApp.');
    } catch {
      setErrorMessage('Failed to resend Phone code.');
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
          <i className="bi bi-flower1 me-2 fs-5 text-success"></i>
          <div className="small">{successMessage}</div>
        </div>
      )}

      {step === 'details' ? (
        <form onSubmit={formik.handleSubmit} noValidate>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label small fw-semibold" style={{ color: '#182e26' }}>
              Full Name
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0">
                <i className="bi bi-person"></i>
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Eleanor Vance"
                className={`form-control border-start-0 ${
                  formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isRegistering}
                autoComplete="name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback d-block">{formik.errors.name}</div>
              )}
            </div>
          </div>

          {/* Registration Mode Selector */}
          <div className="mb-3">
            <label className="form-label small fw-semibold d-block" style={{ color: '#182e26' }}>
              Membership Channels
            </label>
            <div className="btn-group w-100" role="group">
              <input
                type="radio"
                className="btn-check"
                name="registrationMode"
                id="mode_both"
                value="both"
                checked={formik.values.registrationMode === 'both'}
                onChange={formik.handleChange}
              />
              <label className="btn btn-outline-secondary btn-sm py-2" htmlFor="mode_both">
                <i className="bi bi-shield-check me-1"></i> Both Email & Phone
              </label>

              <input
                type="radio"
                className="btn-check"
                name="registrationMode"
                id="mode_email"
                value="email_only"
                checked={formik.values.registrationMode === 'email_only'}
                onChange={formik.handleChange}
              />
              <label className="btn btn-outline-secondary btn-sm py-2" htmlFor="mode_email">
                <i className="bi bi-envelope me-1"></i> Email Only
              </label>

              <input
                type="radio"
                className="btn-check"
                name="registrationMode"
                id="mode_phone"
                value="phone_only"
                checked={formik.values.registrationMode === 'phone_only'}
                onChange={formik.handleChange}
              />
              <label className="btn btn-outline-secondary btn-sm py-2" htmlFor="mode_phone">
                <i className="bi bi-phone me-1"></i> Phone Only
              </label>
            </div>
          </div>

          {/* Email Field */}
          {(formik.values.registrationMode === 'both' ||
            formik.values.registrationMode === 'email_only') && (
            <div className="mb-3">
              <label htmlFor="email" className="form-label small fw-semibold" style={{ color: '#182e26' }}>
                Email address
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light text-muted border-end-0">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="member@anahataspawellness.com"
                  className={`form-control border-start-0 ${
                    formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isRegistering}
                  autoComplete="email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback d-block">{formik.errors.email}</div>
                )}
              </div>
            </div>
          )}

          {/* Phone Field */}
          {(formik.values.registrationMode === 'both' ||
            formik.values.registrationMode === 'phone_only') && (
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
                  value={formik.values.countryCode}
                  onChange={formik.handleChange}
                  disabled={isRegistering}
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
                    formik.touched.phoneNumber && formik.errors.phoneNumber ? 'is-invalid' : ''
                  }`}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isRegistering}
                  autoComplete="tel-national"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="invalid-feedback d-block">{formik.errors.phoneNumber}</div>
                )}
              </div>
            </div>
          )}

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label small fw-semibold" style={{ color: '#182e26' }}>
              Create Sanctuary Password
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0">
                <i className="bi bi-lock"></i>
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                className={`form-control border-start-0 border-end-0 ${
                  formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isRegistering}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="btn btn-outline-secondary border-start-0 bg-light text-muted"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback d-block">{formik.errors.password}</div>
              )}
            </div>
            <div className="form-text text-muted small">
              Must be at least 8 characters long.
            </div>
          </div>

          {/* Agree Terms Checkbox */}
          <div className="mb-4">
            <div className="form-check">
              <input
                className={`form-check-input ${
                  formik.touched.agreeTerms && formik.errors.agreeTerms ? 'is-invalid' : ''
                }`}
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formik.values.agreeTerms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="form-check-label small text-muted" htmlFor="agreeTerms">
                I agree to the <a href="#terms" className="text-decoration-none fw-medium" style={{ color: '#c5a880' }}>Wellness Terms</a> and <a href="#privacy" className="text-decoration-none fw-medium" style={{ color: '#c5a880' }}>Privacy Policy</a>.
              </label>
              {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                <div className="invalid-feedback d-block">{formik.errors.agreeTerms}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-spa-gold w-100 py-3 fw-semibold d-flex align-items-center justify-content-center shadow-sm"
            disabled={isRegistering || isSendingEmailOtp || isSendingPhoneOtp}
          >
            {isRegistering || isSendingEmailOtp || isSendingPhoneOtp ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending verification codes...
              </>
            ) : (
              <>
                <i className="bi bi-flower1 me-2"></i>
                Continue to Sanctuary Verification
                <i className="bi bi-arrow-right ms-2"></i>
              </>
            )}
          </button>
        </form>
      ) : (
        /* Step 2: OTP Verification */
        <form onSubmit={otpFormik.handleSubmit} noValidate>
          <div className="p-3 bg-light rounded-3 mb-4 border">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="small fw-semibold text-dark">{formik.values.name}</div>
                <div className="small text-muted">
                  {formik.values.email && <div>Email: {formik.values.email}</div>}
                  {formik.values.phoneNumber && (
                    <div>Phone: {formik.values.countryCode} {formik.values.phoneNumber}</div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-link btn-sm p-0 text-decoration-none fw-semibold"
                style={{ color: '#c5a880' }}
                onClick={() => {
                  setStep('details');
                  otpFormik.resetForm();
                  setErrorMessage(null);
                }}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Email OTP Field */}
          {(formik.values.registrationMode === 'both' ||
            formik.values.registrationMode === 'email_only') && (
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label htmlFor="emailOtp" className="form-label small fw-semibold mb-0" style={{ color: '#182e26' }}>
                  <i className="bi bi-envelope me-1 text-primary"></i> Email Sanctuary Code
                </label>
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 text-decoration-none small fw-medium"
                  style={{ color: '#2a4d40' }}
                  onClick={handleResendEmailOtp}
                  disabled={emailTimer > 0 || isSendingEmailOtp}
                >
                  {emailTimer > 0 ? `Resend in ${emailTimer}s` : 'Resend Email Code'}
                </button>
              </div>
              <input
                id="emailOtp"
                name="emailOtp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="6-digit Email code"
                className={`form-control form-control-lg text-center fw-bold ${
                  otpFormik.touched.emailOtp && otpFormik.errors.emailOtp ? 'is-invalid' : ''
                }`}
                value={otpFormik.values.emailOtp}
                onChange={otpFormik.handleChange}
                onBlur={otpFormik.handleBlur}
                disabled={isVerifyingEmailOtp}
              />
              {otpFormik.touched.emailOtp && otpFormik.errors.emailOtp && (
                <div className="invalid-feedback d-block">{otpFormik.errors.emailOtp}</div>
              )}
            </div>
          )}

          {/* Phone OTP Field */}
          {(formik.values.registrationMode === 'both' ||
            formik.values.registrationMode === 'phone_only') && (
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label htmlFor="phoneOtp" className="form-label small fw-semibold mb-0" style={{ color: '#182e26' }}>
                  <i className="bi bi-whatsapp me-1 text-success"></i> WhatsApp Sanctuary Code
                </label>
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 text-decoration-none small fw-medium"
                  style={{ color: '#2a4d40' }}
                  onClick={handleResendPhoneOtp}
                  disabled={phoneTimer > 0 || isSendingPhoneOtp}
                >
                  {phoneTimer > 0 ? `Resend in ${phoneTimer}s` : 'Resend WhatsApp Code'}
                </button>
              </div>
              <input
                id="phoneOtp"
                name="phoneOtp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="6-digit WhatsApp code"
                className={`form-control form-control-lg text-center fw-bold ${
                  otpFormik.touched.phoneOtp && otpFormik.errors.phoneOtp ? 'is-invalid' : ''
                }`}
                value={otpFormik.values.phoneOtp}
                onChange={otpFormik.handleChange}
                onBlur={otpFormik.handleBlur}
                disabled={isVerifyingPhoneOtp}
              />
              {otpFormik.touched.phoneOtp && otpFormik.errors.phoneOtp && (
                <div className="invalid-feedback d-block">{otpFormik.errors.phoneOtp}</div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-spa-primary w-100 py-3 fw-semibold d-flex align-items-center justify-content-center shadow-sm"
            disabled={isVerifyingEmailOtp || isVerifyingPhoneOtp || !otpFormik.isValid}
          >
            {isVerifyingEmailOtp || isVerifyingPhoneOtp ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Verifying & Creating Sanctuary Membership...
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
