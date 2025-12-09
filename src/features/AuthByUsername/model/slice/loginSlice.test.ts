import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'username' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('value'))).toEqual({
      username: 'value',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('value'))).toEqual({
      password: 'value',
    });
  });
});
