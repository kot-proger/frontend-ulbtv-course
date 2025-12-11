import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/AuthByUsername/ui/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
      },
    }),
  ],
};
