
/* eslint-disable @typescript-eslint/no-explicit-any */
export type ValidatorFn = (value: any) => ValidatorErrors | null;

export interface ValidatorErrors {
  [name: string]: any;
}
