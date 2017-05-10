const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
       	loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: "/dist"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?name=images/[name].[ext]',
            'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.join(__dirname),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles/[name].css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Images: path.resolve(__dirname, 'src/images/'),
      Styles: path.resolve(__dirname, 'src/styles/')
    }
  }
};
