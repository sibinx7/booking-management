import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  AuthResponse,
  EmailLoginRequest,
  GoogleLoginRequest,
  RegisterRequest,
  SendEmailOtpRequest,
  SendWhatsappOtpRequest,
  VerifyEmailOtpRequest,
  VerifyWhatsappOtpRequest,
} from '@/types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    loginWithEmail: builder.mutation<AuthResponse, EmailLoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    sendWhatsappOtp: builder.mutation<AuthResponse, SendWhatsappOtpRequest>({
      query: (data) => ({
        url: '/auth/whatsapp/send-otp',
        method: 'POST',
        body: data,
      }),
    }),

    verifyWhatsappOtp: builder.mutation<AuthResponse, VerifyWhatsappOtpRequest>({
      query: (data) => ({
        url: '/auth/whatsapp/verify-otp',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),

    sendEmailOtp: builder.mutation<AuthResponse, SendEmailOtpRequest>({
      query: (data) => ({
        url: '/auth/email/send-otp',
        method: 'POST',
        body: data,
      }),
    }),

    verifyEmailOtp: builder.mutation<AuthResponse, VerifyEmailOtpRequest>({
      query: (data) => ({
        url: '/auth/email/verify-otp',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),

    registerUser: builder.mutation<AuthResponse, RegisterRequest>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),

    loginWithGoogle: builder.mutation<AuthResponse, GoogleLoginRequest>({
      query: (data) => ({
        url: '/auth/google',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginWithEmailMutation,
  useSendWhatsappOtpMutation,
  useVerifyWhatsappOtpMutation,
  useSendEmailOtpMutation,
  useVerifyEmailOtpMutation,
  useRegisterUserMutation,
  useLoginWithGoogleMutation,
} = authApi;
