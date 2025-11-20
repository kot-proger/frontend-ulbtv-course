import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import HomeIcon from 'shared/assets/icons/home-page.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink className={cls.item} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
            <HomeIcon className={cls.icon} />
            <span className={cls.link}>{t('Главная страница')}</span>
          </AppLink>
        </div>
        <div>
          <AppLink className={cls.item} to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t('О сайте')}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
