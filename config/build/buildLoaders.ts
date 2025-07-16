import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptloader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node-modules/,
  };

  const svgLoader = buildSVGLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: ['file-loader'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
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
  };

  const cssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescriptloader, cssLoader];
}
