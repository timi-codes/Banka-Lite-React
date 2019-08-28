const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      },
      {
        test: /\.(css|scss|sass)/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
};
