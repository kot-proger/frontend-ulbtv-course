/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { fileURLToPath } from 'url';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    entry: '',
  };
  config.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });
  config!.module!.rules.push(buildCssLoader(true));
  config!.module!.rules.push(buildSVGLoader());
  config!.module!.rules.push({
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', { nsSeparator: '~', locales: ['ru', 'en'], keyAsDefaultValue: true }],
        ],
      },
    },
  });
  config!.plugins!.push(
    new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(true), __API__: JSON.stringify('') })
  );
  return config;
};
