const { DefinePlugin } = require(`webpack`);

module.export = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
