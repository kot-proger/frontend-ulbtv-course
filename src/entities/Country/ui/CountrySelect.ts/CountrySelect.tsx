import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';
import Select from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

const CountrySelect = memo(({ className, value, onChange, readOnly }: CountrySelectProps) => {
  const onChangeCountry = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label='Страна'
      options={options}
      value={value}
      onChange={onChangeCountry}
      readOnly={readOnly}
    />
  );
});

export default CountrySelect;
