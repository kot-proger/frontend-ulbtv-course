import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(opt: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = opt;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'main.[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(opt),
    module: {
      rules: buildLoaders(opt),
    },
    resolve: buildResolvers(opt),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(opt) : undefined,
  };
}
