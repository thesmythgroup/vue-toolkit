import Vue, { ComponentOptions } from 'vue';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formControl: ComponentOptions<Vue> = {
  inject: {
    form: {
      default: null,
    },
  },
  created() {
    (this as any).form?.addControl(this.name, this);
  },
  destroyed() {
    (this as any).form?.removeControl(this.name);
  },
};
