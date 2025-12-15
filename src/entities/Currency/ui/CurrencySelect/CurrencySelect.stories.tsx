import { Currency } from 'entities/Currency/model/types/currency';
import CurrencySelect from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: Currency.RUB,
    onChange: jest.fn(),
  },
};

export const Light = {};
