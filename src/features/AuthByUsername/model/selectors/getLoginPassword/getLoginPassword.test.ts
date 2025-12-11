import { StateScema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateScema> = {
      loginForm: {
        password: 'password',
      },
    };
    expect(getLoginPassword(state as StateScema)).toEqual('password');
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateScema> = {};
    expect(getLoginPassword(state as StateScema)).toEqual('');
  });
});
