import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
};

export const Primary = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nostrum animi reprehenderit temporibus? Harum atque earum beatae sunt! Itaque voluptas veritatis hic optio, a quas vel molestiae sit aut quos.',
  },
};
export const Dark = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nostrum animi reprehenderit temporibus? Harum atque earum beatae sunt! Itaque voluptas veritatis hic optio, a quas vel molestiae sit aut quos.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
