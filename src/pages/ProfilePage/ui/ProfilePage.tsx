import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
  getProfileIsLoading,
  getProfileError,
  profileActions,
  getProfileReadOnly,
  getProfileForm,
  getProfileValidateErrors,
  ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

// @ts-ignore
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('neverno-ukazan-vozrast'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('neverno-ukazana-strana'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('neverno-ukazana-valyuta'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('neverno-ukazany-dannye-polzovatelya'),
    [ValidateProfileError.NO_DATA]: t('otsutstvuyut-dannye'),
    [ValidateProfileError.SERVER_ERROR]: t('oshibka-servera'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((error: ValidateProfileError) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[error]}
              key={validateErrorTranslates[error]}
            />
          ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
