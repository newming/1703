const path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname, "dist"), // 放到哪个文件夹
    filename: "bundle.js",
    publicPath: "dist/"
  },
  resolve: {
  	extensions: [".js", ".json", ".jsx", ".css"]
	},
	devtool: "source-map", 
  module: {
	  rules: [
	    { test: /\.js[x]?$/, exclude: /node_modules/, use: "babel-loader" },
	    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' }
	  ]
	}
}