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
  const submitted = ref(false);

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

  const touched = computed(() =>
    Object.values(controls.value).some((control) => control.touched)
  );

  const dirty = computed(() =>
    Object.values(controls.value).some((control) => control.dirty)
  );

  const valid = computed(() => errors.value === null);

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
    submitted.value = true;

    const payload: FormSubmitEvent = {
      value: unref(value),
      errors: unref(errors),
      touched: unref(touched),
      dirty: unref(dirty),
      valid: unref(valid),
    };

    emit('submit', payload);
  };

  const reset = () => {
    submitted.value = false;
    Object.values(controls.value).forEach((control) => control.reset());
  };

  const addControl: FormAddControlFn = (name, ctrl) => {
    const validators = opts?.validationSchema?.[name];

    if (validators) {
      ctrl.setValidators(validators);
    }

    controls.value = {
      ...controls.value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [name]: ctrl as any,
    };
  };

  const removeControl: FormRemoveControlFn = (name) => {
    const newValue = { ...controls.value };

    delete newValue[name];
    controls.value = newValue;
  };

  provide('form:addControl', addControl);
  provide('form:removeControl', removeControl);
  provide('form:context', { submitted });

  if (opts?.initialValue) {
    setValue(opts.initialValue);
  }

  return {
    dirty,
    errors,
    handleSubmit,
    reset,
    setValue,
    submitted,
    touched,
    valid,
    value,
  };
}
