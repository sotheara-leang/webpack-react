const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const root = path.resolve(__dirname, '../');

const bootstrapEntryPoints = require('./bootstrap/bootstrap.js');

module.exports = {
  entry: {
    app: path.join(root, 'src/scripts/AppBootstrap.jsx'),
    bootstrap: bootstrapEntryPoints.dev
  },
  output: {
    path: path.join(root, 'dist'),
    filename: 'scripts/[name].js'
  },
  devServer: {
    contentBase: path.join(root, "dist"),
    compress: true,
    port: 9000,
    open: false,
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(root, 'src/scripts/'),
       	loader: 'babel-loader?babelrc=false&extends=' + path.join(__dirname, '/.babelrc')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(root),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(root, 'src/*.html')),
      minimize: false
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
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'scripts/[name].js.map',
      exclude: ['vendor.js']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Root: path.join(root, 'src/'),
      Components: path.join(root, 'src/scripts/components/'),
      Models: path.join(root, 'src/scripts/models/'),
      Services: path.join(root, 'src/scripts/services/'),
      Utils: path.join(root, 'src/scripts/utils/'),
      Images: path.join(root, 'src/images/'),
      Styles: path.join(root, 'src/styles/')
    }
  }
};
