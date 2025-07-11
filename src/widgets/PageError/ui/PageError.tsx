import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const realoadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.pageerror, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={realoadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
