<template>
  <textarea
    class="textarea"
    :id="id"
    :value="innerValue"
    @input="handleInput"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';

import { useFormControl } from '../../composition';

export default defineComponent({
  name: 'v-textarea',
  props: {
    name: String,
    value: String,
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
