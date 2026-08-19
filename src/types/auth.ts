export interface UserProfile {
  id: string;
  email?: string;
  phoneNumber?: string;
  name?: string;
  avatarUrl?: string;
}

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  activeMethod: 'email' | 'whatsapp' | 'google';
}

export interface EmailLoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SendWhatsappOtpRequest {
  countryCode: string;
  phoneNumber: string;
}

export interface VerifyWhatsappOtpRequest {
  countryCode: string;
  phoneNumber: string;
  otp: string;
}

export interface GoogleLoginRequest {
  idToken: string;
}

export interface RegisterRequest {
  name: string;
  email?: string;
  countryCode?: string;
  phoneNumber?: string;
  password?: string;
  registrationMode: 'both' | 'email_only' | 'phone_only';
  agreeTerms: boolean;
}

export interface SendEmailOtpRequest {
  email: string;
}

export interface VerifyEmailOtpRequest {
  email: string;
  otp: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: UserProfile;
}
