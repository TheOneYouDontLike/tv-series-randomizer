var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/components/app.jsx'],
    vendors: ['react', 'babel-polyfill']
  },

  output: {
    filename: './src/public/[name].js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        include: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/store'),
          path.resolve(__dirname, 'src/debounce.js')
        ],

        test: [/\.jsx$/, /\.js$/]
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
