const PATH = require('path')

module.exports = {
  mode: 'production',
  watch: true,
  entry: './src/main.js',
  output: {
    path: PATH.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
