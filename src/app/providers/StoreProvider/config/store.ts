import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import type { StateScema } from './StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState: StateScema) {
  const rootReducers: ReducersMapObject<StateScema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateScema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
