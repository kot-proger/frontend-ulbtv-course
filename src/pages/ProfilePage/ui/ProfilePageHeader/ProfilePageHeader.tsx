import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

const ProfilePageHeader = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onUndo = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('Профиль пользователя')} />
      {readOnly ? (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onUndo}>
            {t('Отменить')}
          </Button>
          <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
