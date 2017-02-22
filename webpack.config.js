
var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n', raw: true
})

module.exports = {
  entry: './src/entry.js',
  output: {
    path: 'dist',
    filename: 'index.weex.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  },
  plugins: [bannerPlugin]
}
