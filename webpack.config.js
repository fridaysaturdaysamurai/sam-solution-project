const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};