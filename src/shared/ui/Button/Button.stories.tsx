import { fn } from 'storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'text',
  },
};

export const Clear = {
  args: {
    children: 'text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
};

export const PrimaryDark = {
  args: {
    children: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark = {
  args: {
    children: 'text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedDark = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
