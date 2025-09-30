/* eslint-disable object-curly-newline */
import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  type?: 'submit' | 'reset' | 'button';
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    type = 'button',
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button type={type} className={classNames(cls.button, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};
