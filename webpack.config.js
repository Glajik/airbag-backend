const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    MainApp: './src/MainApp.js',
    ServicingApp: './src/ServicingApp.js',
    ImportingApp: './src/ImportingApp.js',
    TestingApp: './src/TestingApp.js',
    HandlingApp: './src/HandlingApp.js',
  },
  output: {
    library: '[name]',
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
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /\.default/g,
                replacement: () => "['default']",
              },
              {
                pattern: /default: obj/g,
                replacement: () => "'default': obj",
              },
              {
                pattern: /import makeUuid from 'uuid\/v4';/g,
                replacement: () => '',
              },
              {
                pattern: /import makeUuid from 'uuid\/v4';/g,
                replacement: () => '',
              },
              {
                pattern: /(?<!Utilities\.)getUuid\(\)/g,
                replacement: () => 'Utilities.getUuid()',
              },
            ],
          }),
        },
      },
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
    new StringReplacePlugin(),
    new LodashModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false,
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         output: {
  //           comments: false,
  //         },
  //       },
  //     }),
  //   ],
  },
};
