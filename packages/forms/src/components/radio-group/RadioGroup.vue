<template>
  <div
    class="radio-group"
    :class="{
      'radio-group--dirty': dirty,
      'radio-group--invalid': invalid,
      'radio-group--pristine': pristine,
      'radio-group--touched': touched,
      'radio-group--untouched': untouched,
      'radio-group--valid': valid,
    }"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-radio-group',
  props: {
    name: {
      type: String,
      default: getUniqueId('radio-group-'),
    },
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

    provide('radio-group', {
      handleBlur,
      handleInput,
      innerValue,
      name: props.name,
      setValue,
    });

    return {
      dirty,
      invalid,
      pristine,
      touched,
      untouched,
      valid,
    };
  },
});
</script>
