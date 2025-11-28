import { StateScema } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginIsLoading = (state: StateScema) => getLoginState(state)?.isLoading ?? false;
