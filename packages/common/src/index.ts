import { Component, VueConstructor } from 'vue';

import * as components from './components';

export * from './components';
export default {
  install: (Vue: VueConstructor) => {
    const all: Record<string, Component> = components;

    for (const key in all) {
      Vue.component(`V${key}`, all[key] as typeof Vue);
    }
  },
};
