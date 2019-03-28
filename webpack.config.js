const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ReplacePlugin = require('webpack-plugin-replace');

module.exports = {
  mode: 'production',
  entry: {
    App: './src/App.js',
  },
  output: {
    library: 'App',
    // libraryExport: 'App',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new ReplacePlugin({
      exclude: [
        /node_modules/,
      ],
      values: {
        'default: obj': "'default': obj",
        '_findIndex.default': "_findIndex['default']",
      },
    }),
    new LodashModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false,
  },
};
