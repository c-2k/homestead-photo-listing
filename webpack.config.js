const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname  }/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
