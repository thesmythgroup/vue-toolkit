import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  define: {
    global: {},
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@vue-toolkit/common/sass/components/_variables',
        replacement: path.resolve(
          __dirname,
          '../packages/common/sass/components/_variables.scss'
        ),
      },
      {
        find: '@vue-toolkit/aws-auth',
        replacement: path.resolve(__dirname, '../packages/aws-auth/src'),
      },
      {
        find: '@vue-toolkit/common',
        replacement: path.resolve(__dirname, '../packages/common/src'),
      },
      {
        find: '@vue-toolkit/forms',
        replacement: path.resolve(__dirname, '../packages/forms/src'),
      },
      {
        // https://github.com/aws-amplify/amplify-ui/issues/268#issuecomment-890594870
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
});
