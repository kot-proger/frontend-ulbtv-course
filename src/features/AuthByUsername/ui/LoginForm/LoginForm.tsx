import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

// @ts-ignore
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

/**
 * Компонент формы авторизации пользователя.
 *
 * @component
 * @param {LoginFormProps} props - Свойства компонента LoginForm.
 * @param {string} [props.className] - Дополнительный CSS-класс для корневого элемента.
 *
 * @returns {JSX.Element} Элемент формы авторизации.
 *
 * @example
 * <LoginForm className="my-custom-class" />
 *
 * Особенности:
 * - Асинхронная авторизация пользователя через loginByUsername.
 * - Управление состоянием формы через Redux.
 * - Отображение ошибок авторизации.
 * - Локализация текста через react-i18next.
 */
const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  /**
   * Обработчик изменения значения поля username.
   * Диспатчит action установки username в состоянии loginForm.
   *
   * @param {string} value - Новое значение username, введённое пользователем.
   */
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  /**
   * Обработчик изменения значения поля password.
   * Диспатчит action установки password в состоянии loginForm.
   *
   * @param {string} value - Новое значение password, введённое пользователем.
   */
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  /**
   * Обработчик события клика по кнопке входа.
   * Диспатчит асинхронный action loginByUsername с текущими значениями username и password.
   *
   * @function
   * @returns {void}
   */
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          className={cls.input}
          type='text'
          name='username'
          id='username-input'
          placeholder={t('Введите username')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cls.input}
          type='text'
          name='password'
          id='password-input'
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
