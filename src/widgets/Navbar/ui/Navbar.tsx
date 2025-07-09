import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>
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
