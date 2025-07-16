import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Light = {};
export const Dark = { decorators: [ThemeDecorator(Theme.DARK)] };
