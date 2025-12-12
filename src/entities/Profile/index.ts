import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from './model/selectors/getProfleForm/getProfileForm';
import type { Profile, ProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import ProfileCard from './ui/ProfileCard/ProfileCard';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export {
  Profile,
  ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  updateProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileForm,
};
