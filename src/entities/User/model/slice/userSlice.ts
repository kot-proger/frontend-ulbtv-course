import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

/**
 * Начальное состояние схемы пользователя.
 * @type {UserSchema}
 */
const initialState: UserSchema = {};

/**
 * Слайс состояния пользователя.
 *
 * @name userSlice
 * @property {function} setAuthData - Устанавливает данные авторизованного пользователя в состояние.
 * @property {function} initAuthData - Инициализирует данные пользователя из localStorage.
 * @property {function} logout - Выходит из аккаунта пользователя и очищает localStorage.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Устанавливает данные пользователя в состояние.
     * @param {UserSchema} state - Текущее состояние.
     * @param {PayloadAction<User>} action - Экшен с объектом пользователя.
     */
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    /**
     * Инициализирует данные пользователя на основе localStorage.
     * @param {UserSchema} state - Текущее состояние.
     */
    initAuthData: (state) => {
      const authData = localStorage.getItem(USER_LS_KEY);
      if (authData) state.authData = JSON.parse(authData);
    },
    /**
     * Очищает данные пользователя из состояния и localStorage.
     * @param {UserSchema} state - Текущее состояние.
     */
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

/**
 * Действия для управления состоянием пользователя.
 */
export const { actions: userActions } = userSlice;

/**
 * Редьюсер состояния пользователя.
 */
export const { reducer: userReducer } = userSlice;
