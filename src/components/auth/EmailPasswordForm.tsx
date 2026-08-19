'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginWithEmailMutation } from '@/store/api/authApi';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';
import type { EmailLoginRequest } from '@/types/auth';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
});

export default function EmailPasswordForm() {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [loginWithEmail, { isLoading }] = useLoginWithEmailMutation();

  const formik = useFormik<EmailLoginRequest>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        const response = await loginWithEmail(values).unwrap();
        if (response.token && response.user) {
          dispatch(setCredentials({ user: response.user, token: response.token }));
          setSuccessMessage(response.message || 'Login successful! Redirecting...');
        } else {
          setSuccessMessage('Logged in successfully!');
        }
      } catch (err: unknown) {
        const apiError = err as { data?: { message?: string }; message?: string };
        setErrorMessage(
          apiError.data?.message || apiError.message || 'Authentication failed. Please check your credentials.'
        );
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      {errorMessage && (
        <div className="alert alert-danger d-flex align-items-center py-2 px-3 mb-3" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <div className="small">{errorMessage}</div>
        </div>
      )}

      {successMessage && (
        <div className="alert alert-success d-flex align-items-center py-2 px-3 mb-3" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          <div className="small">{successMessage}</div>
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label small fw-semibold">
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
            placeholder="name@example.com"
            className={`form-control border-start-0 ${
              formik.touched.email && formik.errors.email ? 'is-invalid' : ''
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback d-block">{formik.errors.email}</div>
          )}
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <label htmlFor="password" className="form-label small fw-semibold mb-0">
            Password
          </label>
          <a
            href="#forgot-password"
            className="text-primary text-decoration-none small"
            onClick={(e) => {
              e.preventDefault();
              alert('Password reset link will be sent to your email.');
            }}
          >
            Forgot password?
          </a>
        </div>
        <div className="input-group">
          <span className="input-group-text bg-light text-muted border-end-0">
            <i className="bi bi-lock"></i>
          </span>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className={`form-control border-start-0 border-end-0 ${
              formik.touched.password && formik.errors.password ? 'is-invalid' : ''
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="btn btn-outline-secondary border-start-0 bg-light text-muted"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
          </button>
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback d-block">{formik.errors.password}</div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          <label className="form-check-label small text-muted" htmlFor="rememberMe">
            Remember me on this device
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100 py-2 fw-semibold d-flex align-items-center justify-content-center"
        disabled={isLoading || !formik.isValid}
      >
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Signing in...
          </>
        ) : (
          <>
            Sign In with Email
            <i className="bi bi-arrow-right ms-2"></i>
          </>
        )}
      </button>
    </form>
  );
}
