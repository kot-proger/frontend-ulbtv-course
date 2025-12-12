import { StateScema } from 'app/providers/StoreProvider';

export const getProfileReadOnly = (state: StateScema) => state.profile?.readonly;
