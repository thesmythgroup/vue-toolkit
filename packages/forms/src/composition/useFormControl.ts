import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  readonly,
  ref,
} from '@vue/composition-api';

import {
  FieldSetControlFn,
  FormAddControlFn,
  FormControl,
  FormRemoveControlFn,
  ValidatorErrors,
  ValidatorFn,
} from '../interfaces';
import requiredValidator from '../validators/required';

export function useFormControl(
  name: string,
  initialValue: unknown,
  emit: (name: string, ...args: unknown[]) => void
) {
  const innerValue = ref(initialValue);
  const value = computed(() => innerValue.value);
  const validators = ref<ValidatorFn[]>([]);

  const dirty = computed(() => innerValue.value !== initialValue);
  const pristine = computed(() => !valid.value);

  const valid = computed(() => errors.value === null);
  const invalid = computed(() => !valid.value);

  const touched = ref(false);
  const untouched = computed(() => !touched.value);

  const required = computed(() => validators.value.includes(requiredValidator));

  const handleBlur = () => (touched.value = true);
  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newValue = input.type === 'checkbox' ? input.checked : input.value;

    innerValue.value = newValue;
    emit('input', newValue);
  };

  const setValidators = (val: ValidatorFn[]) => {
    validators.value = val;
  };

  const setValue = (value: unknown) => {
    innerValue.value = value;
    emit('input', value);
  };

  const errors = computed(() => {
    if (validators.value.length === 0) {
      return null;
    }

    return validators.value.reduce<ValidatorErrors | null>((prev, fn) => {
      const res = fn(innerValue.value);

      if (res) {
        prev = Object.assign({}, prev, res);
      }

      return prev;
    }, null);
  });

  const control: FormControl = {
    dirty,
    errors,
    invalid,
    pristine,
    required,
    setValidators,
    setValue,
    touched: readonly(touched),
    untouched,
    valid,
    value,
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
    dirty,
    errors,
    handleBlur,
    handleInput,
    innerValue,
    invalid,
    pristine,
    setValidators,
    setValue,
    touched,
    untouched,
    valid,
    value,
  };
}
