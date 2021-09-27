<template>
  <input
    type="text"
    class="input"
    :class="{
      'input--dirty': dirty,
      'input--invalid': invalid,
      'input--pristine': pristine,
      'input--touched': touched,
      'input--untouched': untouched,
      'input--valid': valid,
    }"
    :id="id"
    :value="innerValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  onMounted,
  watch,
} from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-input',
  props: {
    name: String,
    value: [String, Number],
  },
  setup(props, { emit }) {
    const {
      dirty,
      handleBlur,
      handleInput,
      innerValue,
      invalid,
      pristine,
      setValue,
      touched,
      untouched,
      valid,
    } = useFormControl(props.name as string, props.value, emit);

    const id = ref(getUniqueId('control-'));
    const fieldSetId = inject<FieldSetIdFn | null>('field:setId', null);

    watch(() => props.value, setValue);

    if (fieldSetId) {
      onMounted(() => fieldSetId(id.value));
    }

    return {
      dirty,
      handleBlur,
      handleInput,
      id,
      innerValue,
      invalid,
      pristine,
      touched,
      untouched,
      valid,
    };
  },
});
</script>
