const webpack = require('webpack');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = {
  context: srcDir,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        include: [path.resolve(__dirname, 'src')],
        options: {
          cacheDirectory: false,
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      },
    ],
  },
  plugins,
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
