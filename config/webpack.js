const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');

const root = path.resolve(__dirname, '../');

const bootstrapEntryPoints = require('./bootstrap/bootstrap.js');

const isProdMode = process.env.ENV === 'prod';

module.exports = {
  entry: {
    app: path.join(root, 'src/index.jsx'),
    bootstrap: isProdMode ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev
  },
  output: {
    path: path.join(root, 'dist'),
    filename: 'scripts/[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.join(root, "dist"),
    compress: true,
    port: 9000,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: path.join(root, 'src/views'),
        use: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(root, 'src'),
       	loader: 'babel-loader?babelrc=false&extends=' + path.join(__dirname, '/.babelrc')
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
        loader: [
            'file-loader?name=images/[name].[ext]',
            'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]'

      },
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(root),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles/[name].[contenthash].css',
      disable: false,
      allChunks: true
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(root, 'src/*.html')),
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor',
       minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1;
       }
     }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Root: path.join(root, 'src/'),
      Components: path.join(root, 'src/components/'),
      Images: path.join(root, 'src/images/'),
      Styles: path.join(root, 'src/styles/')
    }
  }
};
