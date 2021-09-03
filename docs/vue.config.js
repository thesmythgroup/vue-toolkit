// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-toolkit/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve('./node_modules/vue'),
      },
    },
  },
  chainWebpack(config) {
    config.resolve.alias.delete('@');
    config.resolve
      .plugin('tsconfig-paths')
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require('tsconfig-paths-webpack-plugin'));
  },
};
