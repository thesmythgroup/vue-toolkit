import { ComputedRef, Ref, DeepReadonly } from '@vue/composition-api';

export interface FormSubmitEvent {
  dirty: boolean;
  errors: ValidatorErrors | null;
  touched: boolean;
  valid: boolean;
  value: Record<string, unknown>;
}

export interface FormControl {
  dirty: ComputedRef<boolean>;
  errors: ComputedRef<ValidatorErrors | null>;
  invalid: ComputedRef<boolean>;
  pristine: ComputedRef<boolean>;
  required: ComputedRef<boolean>;
  reset: () => void;
  setValidators: (validators: ValidatorFn[]) => void;
  setValue: (value: unknown) => void;
  touched: DeepReadonly<Ref<boolean>>;
  untouched: DeepReadonly<Ref<boolean>>;
  valid: ComputedRef<boolean>;
  value: ComputedRef<unknown>;
}

export type ValidatorFn = (value: unknown) => ValidatorErrors | null;

export interface ValidatorErrors {
  [name: string]: any;
}

export type FormAddControlFn = (name: string, ctrl: FormControl) => void;
export type FormRemoveControlFn = (name: string) => void;
export type FieldSetControlFn = (ctrl: FormControl | null) => void;
export type FieldSetIdFn = (id: string) => void;

export interface FormOptions {
  initialValue?: Record<string, unknown>;
  validationSchema?: Record<string, ValidatorFn[]>;
}
