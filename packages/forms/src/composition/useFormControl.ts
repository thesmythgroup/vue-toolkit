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

  const setValidators = (val: ValidatorFn[]) => {
    validators.value = val;
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

  const formAddControl = inject<FormAddControlFn | null>(
    'form:addControl',
    null
  );
  const formRemoveControl = inject<FormRemoveControlFn | null>(
    'form:removeControl',
    null
  );
  const fieldSetControl = inject<FieldSetControlFn | null>(
    'field:setControl',
    null
  );

  if (formAddControl && formRemoveControl) {
    onMounted(() => formAddControl(name, control));
    onUnmounted(() => formRemoveControl(name));
  }

  if (fieldSetControl) {
    onMounted(() => fieldSetControl(control));
    onUnmounted(() => fieldSetControl(null));
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
