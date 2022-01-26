module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.lang-inline$/,
        type: 'asset/source',
      },
      {
        test: /\.lang$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].json[query]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: '[name].[hash][ext][query]',
        },
      },
    ],
  },
};
