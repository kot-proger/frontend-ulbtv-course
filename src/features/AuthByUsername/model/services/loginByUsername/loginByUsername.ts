import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LS_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.post<User>('/auth', { ...authData });

      if (!response.data) throw new Error('no data');

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      extra.navigate?.('/about');
      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      return rejectWithValue(i18n.t('Неверный логин или пароль'));
    }
  }
);
