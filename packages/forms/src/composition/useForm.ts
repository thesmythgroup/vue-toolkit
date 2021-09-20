import { provide, ref } from '@vue/composition-api';

import {
  FormControl,
  FormOptions,
  FormSubmitEvent,
  ValidatorErrors,
} from '../interfaces';

export function useForm(
  opts: FormOptions,
  emit: (name: string, ...args: unknown[]) => void
) {
  const controls = ref<Record<string, FormControl>>({});

  const getValue = () => {
    return Object.entries(controls.value).reduce(
      (value, [name, control]) => ({
        ...value,
        [name]: control.getValue(),
      }),
      {}
    );
  };

  const setValue = (value: Record<string, unknown>) => {
    Object.entries(controls.value).forEach(([name, control]) => {
      if (name in value) {
        control.setValue(value[name]);
      }
    });
  };

  const getErrors = () => {
    let errors: ValidatorErrors | null = null;

    Object.entries(controls.value).forEach(([name, control]) => {
      const result = control.getErrors();

      if (result) {
        errors = Object.assign({}, errors, { [name]: result });
      }
    });

    return errors;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const errors = getErrors();
    const value = getValue();
    const isValid = errors === null;

    // todo: dirty, touched, etc
    const payload: FormSubmitEvent = {
      value,
      errors,
      valid: isValid,
      invalid: !isValid,
    };

    emit('submit', payload);
  };

  const addControl = (name: string, ctrl: FormControl) => {
    const validators = opts?.validationSchema?.[name];

    if (validators) {
      ctrl.setValidators(validators);
    }

    controls.value[name] = ctrl;
  };

  const removeControl = (name: string) => {
    delete controls.value[name];
  };

  provide('form-add-control', addControl);
  provide('form-remove-control', removeControl);

  if (opts?.initialValue) {
    setValue(opts.initialValue);
  }

  return {
    getErrors,
    getValue,
    handleSubmit,
    setValue,
  };
}
