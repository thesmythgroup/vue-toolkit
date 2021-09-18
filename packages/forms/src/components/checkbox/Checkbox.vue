<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      v-bind="$attrs"
      :id="id"
      :checked="innerValue"
      @change="handleInput"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, isVue3, inject } from 'vue-demi';

import { useFormControl } from '../../composition';

const modelProp = isVue3 ? 'modelValue' : 'value';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  props: {
    name: String,
    [modelProp]: Boolean,
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
