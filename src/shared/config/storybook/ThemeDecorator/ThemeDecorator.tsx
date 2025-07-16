import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => {}) => {
  return <div className={`app ${theme}`}>{story()}</div>;
};
