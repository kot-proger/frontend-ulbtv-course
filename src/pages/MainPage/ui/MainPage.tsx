import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Select from 'shared/ui/Select/Select';
import cls from './MainPage.module.scss';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>('');

  const onChange = (val: string): void => {
    setValue(val);
  };

  return (
    <div className={cls.MainPage}>
      {t('Главная страница')}
      <Select
        label='Choose value'
        options={[
          { value: 'fooo', content: 'fooo' },
          { value: 'foo', content: 'foo' },
          { value: 'fo', content: 'fo' },
        ]}
      />
      <Counter />
      <BugButton />
      <Input value={value} onChange={onChange} placeholder='some-input' />
      <span>{value}</span>
    </div>
  );
};

export default MainPage;
