import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Модальное окно для авторизации по логину и паролю.
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} [props.className] - Дополнительный CSS-класс для корневого элемента
 * @param {boolean} props.isOpen - Флаг открытия модального окна
 * @param {() => void} props.onClose - Функция, вызываемая при закрытии модального окна
 * @returns {JSX.Element} Модальное окно авторизации
 */
const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
