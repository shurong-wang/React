var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [],  // 鏍规嵁 node.js 鐜鍙橀噺锛屽姩鎬佽缃?plugins 椤圭殑鍊?  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel'
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

// 鏍规嵁 node.js 鐜鍙橀噺锛屽姩鎬佽缃?plugins 椤圭殑鍊?// 闇€瑕佸湪 package.js 鏂囦欢 scripts 椤?璁剧疆 NODE_ENV锛?/*
{
  "scripts": {
    "start": "NODE_ENV=dev webpack-dev-server --progress --colors --hot --inline -d",
    "build": "NODE_ENV=production webpack --progress --colors --minify"
  }
}
*/

if (env === 'production') {
  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  );
}

module.exports = config;
