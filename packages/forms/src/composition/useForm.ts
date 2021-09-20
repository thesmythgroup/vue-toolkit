import { computed, provide, ref, unref } from '@vue/composition-api';

import {
  FormAddControlFn,
  FormControl,
  FormOptions,
  FormRemoveControlFn,
  FormSubmitEvent,
  ValidatorErrors,
} from '../interfaces';

export function useForm(
  opts: FormOptions,
  emit: (name: string, ...args: unknown[]) => void
) {
  const controls = ref<Record<string, FormControl>>({});

  const value = computed(() => {
    return Object.entries(controls.value).reduce(
      (value, [name, control]) => ({
        ...value,
        [name]: control.value,
      }),
      {}
    );
  });

  const setValue = (value: Record<string, unknown>) => {
    Object.entries(controls.value).forEach(([name, control]) => {
      if (name in value) {
        control.setValue(value[name]);
      }
    });
  };

  const errors = computed(() => {
    return Object.entries(controls.value).reduce<ValidatorErrors | null>(
      (prev, [name, control]) => {
        const res = control.errors;

        if (res) {
          prev = Object.assign({}, prev, { [name]: res });
        }

        return prev;
      },
      null
    );
  });

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const isValid = errors.value === null;

    // todo: dirty, touched, etc
    const payload: FormSubmitEvent = {
      value: unref(value),
      errors: unref(errors),
      valid: isValid,
      invalid: !isValid,
    };

    emit('submit', payload);
  };

  const addControl: FormAddControlFn = (name, ctrl) => {
    const validators = opts?.validationSchema?.[name];

    if (validators) {
      ctrl.setValidators(validators);
    }

    controls.value = {
      ...controls.value,
      [name]: ctrl,
    };
  };

  const removeControl: FormRemoveControlFn = (name) => {
    const newValue = { ...controls.value };

    delete newValue[name];
    controls.value = newValue;
  };

  provide('form:addControl', addControl);
  provide('form:removeControl', removeControl);

  if (opts?.initialValue) {
    setValue(opts.initialValue);
  }

  return {
    errors,
    value,
    handleSubmit,
    setValue,
  };
}
