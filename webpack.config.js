const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: [
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
       	loader: "babel-loader"
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};