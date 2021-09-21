<template>
  <select
    class="select"
    :class="{
      'select--dirty': dirty,
      'select--invalid': invalid,
      'select--pristine': pristine,
      'select--touched': touched,
      'select--untouched': untouched,
      'select--valid': valid,
    }"
    :id="id"
    :value="innerValue"
    @blur="handleBlur"
    @change="handleInput"
  >
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-select',
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
      touched,
      untouched,
      valid,
    } = useFormControl(props.name as string, props.value, emit);

    const id = ref(getUniqueId('control-'));
    const fieldSetId = inject<FieldSetIdFn | null>('field:setId', null);

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
