import { Component } from 'vue';
import { VueConstructor } from 'vue/types/umd';

import * as components from './components';
import { AuthConfig, AuthSignUpVerification } from './interfaces';

export * from './guards';
export * from './router';
export * from './interfaces';

export default {
  install: (Vue: VueConstructor, options: AuthConfig) => {
    const all: Record<string, Component> = components;

    for (const key in all) {
      Vue.component(`V${key}`, all[key] as typeof Vue);
    }

    const config = {
      // defaults
      allowRememberDevice: true,
      allowSignUp: true,
      signUpVerification: AuthSignUpVerification.Code,

      // overrides
      ...options,
    };

    // todo: add somewhere global
    console.log(config);
  },
};
