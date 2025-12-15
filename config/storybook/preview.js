/** @type { import('@storybook/react-webpack5').Preview } */

import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecoracor/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import 'loki/configure-react';
// eslint-disable-next-line max-len
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, TranslationDecorator],
};

export default preview;
