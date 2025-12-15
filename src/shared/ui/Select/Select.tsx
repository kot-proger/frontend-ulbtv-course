import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const Select = memo(
  ({ className, label, options, value, onChange, readOnly = false }: SelectProps) => {
    const mods: Mods = { [cls.readOnly]: readOnly };

    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readOnly}>
          {optionsList}
        </select>
      </div>
    );
  }
);

export default Select;
