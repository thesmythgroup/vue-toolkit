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
      'radio-group--disabled': disabled,
    }"
    role="radiogroup"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, watch } from '@vue/composition-api';

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
    disabled: {
      type: Boolean,
      default: false,
    },
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

    watch(() => props.value, setValue);

    provide('radio-group', {
      handleBlur,
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
