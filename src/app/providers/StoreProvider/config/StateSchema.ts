import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateScema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateScema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScema>;
  reduce: (state: StateScema, action: AnyAction) => CombinedState<StateScema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScema> {
  reducerManager?: ReducerManager;
}
