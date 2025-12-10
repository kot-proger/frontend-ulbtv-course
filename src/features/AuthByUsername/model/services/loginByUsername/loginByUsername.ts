import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LS_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/auth', { ...authData });

    if (!response.data) throw new Error('no data');

    localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    return thunkApi.rejectWithValue(i18n.t('Неверный логин или пароль'));
  }
});
