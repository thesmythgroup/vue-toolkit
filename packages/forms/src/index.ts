import { VueConstructor } from 'vue';

import * as components from './components';

export * from './components';
export * from './interfaces';
export * as validators from './validators';

export default {
  install: (Vue: VueConstructor) => {
    Object.values(components).forEach((comp) => {
      Vue.component(comp.name, comp);
    });
  },
};
