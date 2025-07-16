/* eslint-disable object-curly-newline */
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, type = 'button', ...otherProps } = props;
  return (
    <button
      type={type}
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
