// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-toolkit/' : '/',
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue'),
      },
    },
  },
};
