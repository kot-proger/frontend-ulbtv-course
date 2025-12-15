import { Country } from '../../model/types/country';
import CountrySelect from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: Country.Armenia,
    onChange: jest.fn(),
  },
};

export const Light = {};
