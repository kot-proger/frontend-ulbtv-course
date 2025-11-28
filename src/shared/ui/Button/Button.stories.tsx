import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  args: { onClick: () => {} },
};

export const Primary = {
  args: {
    children: 'text',
  },
};

export const Clear = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outlined = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
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
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearInvertedDark = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedDark = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundDark = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInvertedDark = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareM = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareL = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled = {
  args: {
    children: 'Disabled',
    theme: ButtonTheme.BACKGROUND,
    disabled: true,
  },
};
