// eslint-disable-next-line storybook/no-renderer-packages
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';
import AvatarImg from './12479599.png';
import Avatar from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({ size: 100, src: AvatarImg });
export const Small = Template.bind({ size: 50, src: AvatarImg });
