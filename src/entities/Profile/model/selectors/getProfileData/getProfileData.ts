import { StateScema } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateScema) => state.profile?.data;
