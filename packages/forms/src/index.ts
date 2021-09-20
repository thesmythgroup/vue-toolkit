import { VueConstructor } from 'vue';

import * as components from './components';

export * from './components';
export default {
  install: (Vue: VueConstructor) => {
    const all: Record<string, typeof Vue> = components;

    for (const key in all) {
      Vue.component(`V${key}`, all[key]);
    }
  },
};
