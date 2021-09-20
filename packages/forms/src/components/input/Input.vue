<template>
  <input
    type="text"
    class="input"
    :id="id"
    :value="innerValue"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';

import { useFormControl } from '../../composition';

export default defineComponent({
  name: 'v-input',
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
