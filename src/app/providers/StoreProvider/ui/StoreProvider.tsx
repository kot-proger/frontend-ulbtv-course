import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateScema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateScema>>;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateScema,
    asyncReducers as ReducersMapObject<StateScema>
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
