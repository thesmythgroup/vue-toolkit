import * as components from './components';
import { AuthConfig, AuthSignUpVerification } from './interfaces';

export * from './guards';
export * from './router';
export * from './interfaces';

export default {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  install: (app: any, options: AuthConfig) => {
    const all: Record<string, any> = components;

    for (const key in all) {
      app.component(`V${key}`, all[key]);
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
