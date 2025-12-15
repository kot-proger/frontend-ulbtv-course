import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Select from 'shared/ui/Select/Select';
import cls from './MainPage.module.scss';

/**
 * Главная страница приложения.
 * Отображает счетчик, кнопки, инпут и текущее значение инпута.
 * Также содержит кнопку, которая выводит в консоль текущее значение инпута.
 *
 * @returns {JSX.Element} Компонент главной страницы
 */
const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>('');

  /**
   * Обработчик изменения значения инпута.
   *
   * @param {string} val Новое значение
   */
  const onChange = (val: string): void => {
    setValue(val);
  };

  /**
   * Выводит текущее значение value в консоль.
   */
  const handleLogValue = (): void => {
    // eslint-disable-next-line no-console
    console.log(value);
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
      <button type='button' onClick={handleLogValue}>
        {t('Вывести значение в консоль')}
      </button>
      <span>{value}</span>
    </div>
  );
};

export default MainPage;
