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

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: UserProfile;
}
