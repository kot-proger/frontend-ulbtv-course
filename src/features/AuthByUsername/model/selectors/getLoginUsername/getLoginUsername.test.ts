import { DeepPartial } from '@reduxjs/toolkit';
import { StateScema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateScema> = { loginForm: { username: 'username' } };
    expect(getLoginUsername(state as StateScema)).toEqual('username');
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateScema> = {};
    expect(getLoginUsername(state as StateScema)).toEqual('');
  });
});
