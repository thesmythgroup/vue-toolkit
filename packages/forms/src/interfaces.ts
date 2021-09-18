export interface FormSubmitEvent {
  value: Record<string, unknown>;
  errors: ValidatorErrors | null;
  valid: boolean;
  invalid: boolean;
}

export interface FormControl {
  getErrors: () => ValidatorErrors | null;
  getValue: () => unknown;
  setValidators: (validators: ValidatorFn[]) => void;
  setValue: (value: unknown) => void;
}

export type ValidatorFn = (value: unknown) => ValidatorErrors | null;

export interface ValidatorErrors {
  [name: string]: any;
}

export type FormAddControlFn = (name: string, ctrl: FormControl) => void;
export type FormRemoveControlFn = (name: string) => void;
export type FieldSetControlFn = (ctrl: FormControl | null) => void;

export interface FormOptions {
  validationSchema?: Record<string, ValidatorFn[]>;
  initialValue?: Record<string, unknown>;
}
