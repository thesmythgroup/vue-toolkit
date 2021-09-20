<template>
  <textarea
    class="textarea"
    :id="id"
    :value="innerValue"
    @input="handleInput"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-textarea',
  props: {
    name: String,
    value: String,
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
