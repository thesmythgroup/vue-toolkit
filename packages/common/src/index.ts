import * as components from './components';

export * from './components';
export default {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  install: (app: any) => {
    const all: Record<string, any> = components;

    for (const key in all) {
      app.component(`V${key}`, all[key]);
    }
  },
};
