import { StateScema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScema> = { loginForm: { isLoading: true } };
    expect(getLoginIsLoading(state as StateScema)).toEqual(true);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateScema> = {};
    expect(getLoginIsLoading(state as StateScema)).toEqual(false);
  });
});
