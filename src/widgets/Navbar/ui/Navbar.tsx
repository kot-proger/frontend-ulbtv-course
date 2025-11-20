import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => setIsAuthModal((prev) => !prev), []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={() => setIsAuthModal(true)}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, deleniti aliquam
        voluptatibus unde corrupti dolor sed. Sapiente odit vero labore iusto totam aperiam ducimus
        a nostrum nobis inventore, provident ipsa?
      </Modal>
    </div>
  );
};
