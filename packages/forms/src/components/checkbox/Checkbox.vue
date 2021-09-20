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
import { defineComponent, inject } from '@vue/composition-api';

import { useFormControl } from '../../composition';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  props: {
    name: String,
    value: Boolean,
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
