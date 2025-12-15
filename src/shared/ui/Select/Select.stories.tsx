import Select from './Select';

export default {
  title: 'shared/Select',
  component: Select,
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
    label: 'label',
  },
};
