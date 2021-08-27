// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue'),
      },
    },
  },
};
