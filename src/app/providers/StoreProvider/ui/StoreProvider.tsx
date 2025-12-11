import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateScema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateScema>>;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateScema,
    asyncReducers as ReducersMapObject<StateScema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
