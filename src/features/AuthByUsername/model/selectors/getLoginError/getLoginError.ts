import { StateScema } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = (state: StateScema) => getLoginState(state)?.error || '';
