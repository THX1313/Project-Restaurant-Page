const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
// then try to update template element css


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {

    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/template.html'
    }),
  ],
  
	// mode: ‘development’,
	watch: true
};