import { StateScema } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = (state: StateScema) => getLoginState(state)?.password || '';
