import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
};

export const Primary = { args: { children: 'link', theme: AppLinkTheme.PRIMARY } };
export const PrimaryDark = {
  args: { children: 'link', theme: AppLinkTheme.PRIMARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary = { args: { children: 'link', theme: AppLinkTheme.SECONDARY } };
export const SecondaryDark = {
  args: { children: 'link', theme: AppLinkTheme.SECONDARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Red = { args: { children: 'link', theme: AppLinkTheme.RED } };
export const RedDark = {
  args: { children: 'link', theme: AppLinkTheme.RED },
  decorators: [ThemeDecorator(Theme.DARK)],
};
