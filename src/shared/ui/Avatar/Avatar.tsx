import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

const Avatar = ({ className, src, alt = 'аватар', size }: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);

  return (
    <img className={classNames(cls.Avatar, {}, [className])} src={src} alt={alt} style={style} />
  );
};

export default Avatar;
