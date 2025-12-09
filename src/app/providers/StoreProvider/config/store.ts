import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { StateScema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState: StateScema,
  asyncReducers?: ReducersMapObject<StateScema>
) {
  const rootReducers: ReducersMapObject<StateScema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateScema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
