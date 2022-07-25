const path    = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CustomPlugin = require('./customPlugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    app: './src/index3.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
        }
      },     
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CustomPlugin()
  ]

}