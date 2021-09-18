<template>
  <textarea
    class="textarea"
    :id="id"
    :value="innerValue"
    @input="handleInput"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, isVue3, inject } from 'vue-demi';

import { useFormControl } from '../../composition';

const modelProp = isVue3 ? 'modelValue' : 'value';

export default defineComponent({
  name: 'v-textarea',
  props: {
    name: String,
    [modelProp]: String,
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
