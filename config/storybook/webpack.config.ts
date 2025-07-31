import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    entry: '',
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });
  config.module.rules.push(buildCssLoader(true));
  config.module.rules.push(buildSVGLoader());
  return config;
};
