import type { StateScema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateScema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateScema)).toEqual(10);
  });
});
