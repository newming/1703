const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname, "dist"), // 放到哪个文件夹
    filename: "bundle.js"
  },
  resolve: {
  	extensions: [".js", ".json", ".jsx", ".css"]
	},
  devServer:{
    port: 3000,
    compress: true,
    hot: true
  },
	devtool: "source-map",
  module: {
	  rules: [
	    { test: /\.js[x]?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use:['style-loader','css-loader','postcss-loader'] },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' }
	  ]
	},
	plugins: [
	  new HtmlWebpackPlugin({
			template: 'public/index.html'
	  }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    })
	]
}