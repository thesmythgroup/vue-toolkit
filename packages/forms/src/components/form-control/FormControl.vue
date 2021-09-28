<template>
  <div>
    <slot v-bind="{ control, listeners }" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-form-control',
  props: {
    name: String,
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
    } = useFormControl(props.name as string, undefined, emit);

    const id = ref(getUniqueId('control-'));
    const fieldSetId = inject<FieldSetIdFn | null>('field:setId', null);

    if (fieldSetId) {
      onMounted(() => fieldSetId(id.value));
    }

    const control = {
      id: id.value,
    };

    const listeners = {
      blur: handleBlur,
      input: handleInput,
    };

    return {
      control,
      listeners,
      dirty,
      innerValue,
      invalid,
      pristine,
      setValue,
      touched,
      untouched,
      valid,
    };
  },
});
</script>
