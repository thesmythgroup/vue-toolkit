<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      v-bind="$attrs"
      :id="id"
      :checked="innerValue"
      @change="handleInput"
      @blur="handleBlur"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  props: {
    name: String,
    value: Boolean,
  },
  setup(props, { emit }) {
    const { innerValue, handleBlur, handleInput } = useFormControl(
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
      handleBlur,
      handleInput,
    };
  },
});
</script>
