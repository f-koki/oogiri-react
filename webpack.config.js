const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // mode: "development"
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ]
  },
  plugins:[
    // cssの出力先を指定する
    new MiniCssExtractPlugin({ filename: 'dist/style.css' }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
}