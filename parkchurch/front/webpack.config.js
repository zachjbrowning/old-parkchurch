const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {auto : true},
                importLoaders: 1
              }
            }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};