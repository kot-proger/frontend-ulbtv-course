import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  className,
}: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notfoundpage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export default NotFoundPage;
