import { DeepPartial } from '@reduxjs/toolkit';
import { StateScema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateScema>) => (story: () => {}) => (
  <StoreProvider initialState={state}>{story()}</StoreProvider>
);
