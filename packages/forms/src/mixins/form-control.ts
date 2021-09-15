/* eslint-disable @typescript-eslint/no-explicit-any */
export const formControl = {
  inject: {
    form: {
      default: null,
    },
  },
  created() {
    (this as any).form?.addControl((this as any).name, this);
  },
  destroyed() {
    (this as any).form?.removeControl((this as any).name);
  },
};
