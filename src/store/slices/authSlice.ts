import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, UserProfile } from '@/types/auth';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  activeMethod: 'email',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: UserProfile; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    setActiveMethod: (
      state,
      action: PayloadAction<'email' | 'whatsapp' | 'google'>
    ) => {
      state.activeMethod = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, setActiveMethod, logout } = authSlice.actions;
export default authSlice.reducer;
