import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'aws-auth',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@vue/composition-api',
        '@vue-toolkit/common',
        '@vue-toolkit/forms',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        // https://github.com/aws-amplify/amplify-ui/issues/268#issuecomment-890594870
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
});
