import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import type { StateScema } from './StateSchema';

export function createReduxStore(initialState: StateScema) {
  return configureStore<StateScema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
