const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'googlemaps.min.js',
    library: {
      name: 'GoogleMapsService',
      type: 'umd',
      export: 'default'
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/domicilio.html',
      filename: 'domicilio.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/inicializacion.html',
      filename: 'inicializacion.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/zonas.html',
      filename: 'zonas.html'
    }),
    new webpack.DefinePlugin({
      'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
    open: true
  }
};
