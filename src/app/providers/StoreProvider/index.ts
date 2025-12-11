import StoreProvider from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateScema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';
import type { AppDispatch } from './config/store';

export {
  StoreProvider,
  createReduxStore,
  StateScema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
};
