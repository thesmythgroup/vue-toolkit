<template>
  <select class="select" :id="id" :value="innerValue" @change="handleInput">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent, isVue3, inject } from 'vue-demi';

import { useFormControl } from '../../composition';

const modelProp = isVue3 ? 'modelValue' : 'value';

export default defineComponent({
  name: 'v-select',
  props: {
    name: String,
    [modelProp]: [String, Number],
  },
  setup(props, { emit }) {
    const id = inject<string>('field-id');
    const { innerValue, handleInput } = useFormControl(
      props.name as string,
      props[modelProp],
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
