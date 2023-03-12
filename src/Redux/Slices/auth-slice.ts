import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: state => {
      state.isLoggedIn = true;
    },
    unAuthUser: state => {
      state.isLoggedIn = false;
    },
  },
});

// Auth selectors
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

// Action creators are generated for each case reducer function
export const AuthActions = authSlice.actions;
export const AuthReducer = authSlice.reducer;
