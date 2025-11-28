import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const authData = localStorage.getItem(USER_LS_KEY);
      if (authData) state.authData = JSON.parse(authData);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
