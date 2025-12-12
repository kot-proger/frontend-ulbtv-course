import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstname: (value: string) => void;
  onChangeLastname: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
}

const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readOnly = true,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading)
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Ошибка загрузки профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Ваш возраст')}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
