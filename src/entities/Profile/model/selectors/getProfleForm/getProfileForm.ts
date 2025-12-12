import { StateScema } from 'app/providers/StoreProvider';

export const getProfileForm = (state: StateScema) => state.profile?.form;
