import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={cls.MainPage}>
      {t('Главная страница')}
      <Counter />
      <BugButton />
      <Input value={value} onChange={onChange} placeholder='some-input' />
      <span>{value}</span>
    </div>
  );
};

export default MainPage;
