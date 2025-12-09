import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateScema>, asyncReducers?: DeepPartial<ReducersMapObject<StateScema>>) =>
  (story: () => {}) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      {story()}
    </StoreProvider>
  );
