import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  AuthResponse,
  EmailLoginRequest,
  GoogleLoginRequest,
  SendWhatsappOtpRequest,
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
  useLoginWithGoogleMutation,
} = authApi;
