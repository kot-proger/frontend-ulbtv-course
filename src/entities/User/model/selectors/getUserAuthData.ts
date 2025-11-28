import { StateScema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateScema) => state.user.authData;
