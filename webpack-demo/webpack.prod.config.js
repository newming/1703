const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname, "dist"), // 放到哪个文件夹
    filename: "js/bundle.[hash:5].js"
  },
  resolve: {
  	extensions: [".js", ".json", ".jsx", ".css"]
	},
	// devtool: "source-map",
  module: {
	  rules: [
	    { test: /\.js[x]?$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'postcss-loader']
        })
      },
      { test: /\.(jpe?g|png)$/, use: 'file-loader?name=[name]-[hash:5].[ext]&outputPath=images/' }
	  ]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
	  new ExtractTextPlugin({
	  	filename: 'style/bundle.min.css'
	  }),
	  new HtmlWebpackPlugin({
			template: 'public/index.html'
	  })
	]
}