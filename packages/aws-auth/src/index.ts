import { VueConstructor } from 'vue';

import * as components from './components';
import { AuthConfig, AuthSignUpVerification } from './interfaces';

export * from './guards';
export * from './router';
export * from './interfaces';

export default {
  install: (Vue: VueConstructor, options: AuthConfig) => {
    Object.values(components).forEach((comp) => {
      Vue.component(comp.name, comp);
    });

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
