import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => {}) => <div className={`app ${theme}`}>{story()}</div>;
