import { DeepPartial } from '@reduxjs/toolkit';
import { StateScema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateScema> = { loginForm: { error: 'error' } };
    expect(getLoginError(state as StateScema)).toEqual('error');
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateScema> = {};
    expect(getLoginError(state as StateScema)).toEqual('');
  });
});
