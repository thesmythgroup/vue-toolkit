<template>
  <div class="radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-radio-group',
  props: {
    name: {
      type: String,
      default: getUniqueId('radio-group-'),
    },
    value: [String, Number],
  },
  setup(props, { emit }) {
    const { innerValue, setValue } = useFormControl(
      props.name as string,
      props.value,
      emit
    );

    provide('radio-group', {
      name: props.name,
      innerValue,
      setValue,
    });
  },
});
</script>
