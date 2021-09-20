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
import { defineComponent, inject, ref, onMounted } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-input',
  props: {
    name: String,
    value: [String, Number],
  },
  setup(props, { emit }) {
    const { innerValue, handleInput } = useFormControl(
      props.name as string,
      props.value,
      emit
    );

    const id = ref(getUniqueId('control-'));
    const fieldSetId = inject<FieldSetIdFn | null>('field:setId', null);

    if (fieldSetId) {
      onMounted(() => fieldSetId(id.value));
    }

    return {
      id,
      innerValue,
      handleInput,
    };
  },
});
</script>
