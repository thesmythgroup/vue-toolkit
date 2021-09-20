<template>
  <select class="select" :id="id" :value="innerValue" @change="handleInput">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';

import { useFormControl } from '../../composition';

export default defineComponent({
  name: 'v-select',
  props: {
    name: String,
    value: [String, Number],
  },
  setup(props, { emit }) {
    const id = inject<string>('field-id', null);
    const { innerValue, handleInput } = useFormControl(
      props.name as string,
      props.value,
      emit
    );

    return {
      id,
      innerValue,
      handleInput,
    };
  },
});
</script>
