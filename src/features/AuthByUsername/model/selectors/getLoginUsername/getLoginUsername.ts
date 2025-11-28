import { StateScema } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = (state: StateScema) => getLoginState(state)?.username || '';
