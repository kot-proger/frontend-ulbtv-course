import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to='/' className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
          Главная страница
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
          Информационная страница
        </AppLink>
      </div>
    </div>
  );
};
