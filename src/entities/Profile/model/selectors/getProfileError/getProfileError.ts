import { StateScema } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateScema) => state.profile?.error;
