const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SheetPlugin = require('./webpack/sheetPlugin');

module.exports = function(config) {
  const isProduction = config.mode === 'production';

  // Rewrite style loaders with modules option for production builds.
  if (isProduction) {
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.use && rule.use.includes('css-loader')),
    );

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'sass-loader',
      ],
    });

    config.plugins.push(new SheetPlugin());
  }
  
  return config;
}