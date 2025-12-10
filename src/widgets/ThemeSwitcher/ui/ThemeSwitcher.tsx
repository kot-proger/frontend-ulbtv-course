import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { memo } from 'react';

export const ThemeSwitcher: React.FC = memo(() => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <Button type='button' theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
