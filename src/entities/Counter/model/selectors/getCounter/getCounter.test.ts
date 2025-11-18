import { DeepPartial } from '@reduxjs/toolkit';
import type { StateScema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateScema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateScema)).toEqual({ value: 10 });
  });
});
