import { StateScema } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateScema) => state.profile?.isLoading;
