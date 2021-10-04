import { VueConstructor } from 'vue';

import * as components from './components';

export * from './components';
export default {
  install: (Vue: VueConstructor) => {
    Object.values(components).forEach((comp) => {
      Vue.component(comp.name, comp);
    });
  },
};
