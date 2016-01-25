var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/components/app.jsx'],
    vendors: ['react']
  },

  output: {
      filename: './src/public/[name].js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        include: [
          path.resolve(__dirname, 'src/components')
        ],

        test: [/\.jsx$/]
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: './src/public/vendor.js'
    })
  ],

  devtool: 'source-map'
}