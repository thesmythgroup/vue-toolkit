import {
  ComputedRef,
  Ref,
  DeepReadonly,
  UnwrapRef,
} from '@vue/composition-api';

export interface FormSubmitEvent<T = Record<string, any>> {
  dirty: boolean;
  errors: ValidatorErrors | null;
  touched: boolean;
  valid: boolean;
  value: T;
}

export interface FormControlRef<T = any> {
  dirty: ComputedRef<boolean>;
  errors: ComputedRef<ValidatorErrors | null>;
  invalid: ComputedRef<boolean>;
  pristine: ComputedRef<boolean>;
  required: ComputedRef<boolean>;
  reset: () => void;
  setValidators: (validators: ValidatorFn[]) => void;
  setValue: (value: T) => void;
  touched: DeepReadonly<Ref<boolean>>;
  untouched: DeepReadonly<Ref<boolean>>;
  valid: ComputedRef<boolean>;
  value: ComputedRef<T>;
}

export type ValidatorFn = (value: any) => ValidatorErrors | null;

export interface ValidatorErrors {
  [name: string]: any;
}

export type FormAddControlFn = (name: string, ctrl: FormControlRef) => void;
export type FormRemoveControlFn = (name: string) => void;
export type FieldSetControlFn = (ctrl: FormControlRef | null) => void;
export type FieldSetIdFn = (id: string) => void;

export interface FormOptions<T = Record<string, any>> {
  initialValue?: T;
  validationSchema?: Record<string, ValidatorFn[]>;
}

export interface FormRef<T = Record<string, any>> {
  controls: Ref<Record<string, UnwrapRef<FormControlRef>>>;
  dirty: ComputedRef<boolean>;
  errors: ComputedRef<ValidatorErrors | null>;
  handleSubmit: (e: Event) => void;
  reset: () => void;
  setValue: (value: Record<string, any>) => void;
  submitted: Ref<boolean>;
  touched: ComputedRef<boolean>;
  valid: ComputedRef<boolean>;
  value: ComputedRef<T>;
}
