import { StateScema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateScema) => state?.loginForm;
