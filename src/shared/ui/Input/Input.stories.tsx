import Input from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    placeholder: 'Type text',
    value: 'some text',
  },
};
