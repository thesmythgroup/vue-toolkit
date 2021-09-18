<template>
  <div class="radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, isVue3, provide } from 'vue-demi';

import { useFormControl } from '../../composition';
import { getUniqueId } from '../../utils';

const modelProp = isVue3 ? 'modelValue' : 'value';

export default defineComponent({
  name: 'v-radio-group',
  props: {
    name: {
      type: String,
      default: getUniqueId('radio-group-'),
    },
    [modelProp]: [String, Number],
  },
  setup(props, { emit }) {
    const { innerValue, setValue } = useFormControl(
      props.name as string,
      props[modelProp],
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
