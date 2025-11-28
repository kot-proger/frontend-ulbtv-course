import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Text, { TextTheme } from './Text';

export default {
  title: 'shared/Button',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat nostrum accusamus, nulla minus id animi enim provident ratione quae debitis, recusandae est necessitatibus, neque deleniti officia perspiciatis dignissimos. Eius.',
  },
};

export const OnlyTitle = {
  args: {
    title: 'Title lorem ipsum',
  },
};

export const OnlyText = {
  args: {
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat nostrum accusamus, nulla minus id animi enim provident ratione quae debitis, recusandae est necessitatibus, neque deleniti officia perspiciatis dignissimos. Eius.',
  },
};

export const PrimaryDark = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat nostrum accusamus, nulla minus id animi enim provident ratione quae debitis, recusandae est necessitatibus, neque deleniti officia perspiciatis dignissimos. Eius.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark = {
  args: {
    title: 'Title lorem ipsum',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark = {
  args: {
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat nostrum accusamus, nulla minus id animi enim provident ratione quae debitis, recusandae est necessitatibus, neque deleniti officia perspiciatis dignissimos. Eius.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat nostrum accusamus, nulla minus id animi enim provident ratione quae debitis, recusandae est necessitatibus, neque deleniti officia perspiciatis dignissimos. Eius.',
  },
};
