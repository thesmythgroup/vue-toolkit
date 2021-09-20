import { inject, onMounted, onUnmounted, ref } from '@vue/composition-api';

import {
  FieldSetControlFn,
  FormAddControlFn,
  FormControl,
  FormRemoveControlFn,
  ValidatorErrors,
  ValidatorFn,
} from '../interfaces';

export function useFormControl(
  name: string,
  initialValue: unknown,
  emit: (name: string, ...args: unknown[]) => void
) {
  const innerValue = ref(initialValue);
  const validators = ref<ValidatorFn[]>([]);

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newValue = input.type === 'checkbox' ? input.checked : input.value;

    innerValue.value = newValue;
    emit('input', newValue);
  };

  const setValidators = (_validators: ValidatorFn[]) => {
    validators.value = _validators;
  };

  const getValue = () => {
    return innerValue.value;
  };

  const setValue = (value: unknown) => {
    innerValue.value = value;
    emit('input', value);
  };

  const getErrors = () => {
    if (validators.value.length === 0) {
      return null;
    }

    let errors: ValidatorErrors | null = null;

    validators.value.forEach((validatorFn) => {
      const result = validatorFn(innerValue.value);

      if (result) {
        errors = Object.assign({}, errors, result);
      }
    });

    return errors;
  };

  const control: FormControl = {
    getErrors,
    getValue,
    setValidators,
    setValue,
  };

  const addFormControl = inject<FormAddControlFn | null>(
    'form-add-control',
    null
  );
  const removeFormControl = inject<FormRemoveControlFn | null>(
    'form-remove-control',
    null
  );
  const setFieldControl = inject<FieldSetControlFn | null>(
    'field-set-control',
    null
  );

  if (addFormControl && removeFormControl) {
    onMounted(() => addFormControl(name, control));
    onUnmounted(() => removeFormControl(name));
  }

  if (setFieldControl) {
    onMounted(() => setFieldControl(control));
    onUnmounted(() => setFieldControl(null));
  }

  return {
    innerValue,
    getErrors,
    getValue,
    handleInput,
    setValidators,
    setValue,
  };
}
