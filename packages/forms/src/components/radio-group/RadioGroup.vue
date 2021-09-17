<template>
  <div class="radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, isVue3 } from 'vue-demi';

import { formControl } from '../../mixins';
import { getUniqueId } from '../../utils';

const modelProp = isVue3 ? 'modelValue' : 'value';
const modelEvent = isVue3 ? 'update:modelValue' : 'input';

export default defineComponent({
  name: 'v-radio-group',
  mixins: [formControl],
  props: {
    name: {
      type: String,
      default: getUniqueId('radio-group-'),
    },
    [modelProp]: [String, Number],
  },
  data() {
    return {
      innerValue: this[modelProp],
    };
  },
  methods: {
    onChange(value: string | number) {
      this.innerValue = value;
      this.$emit(modelEvent, value);
    },
  },
  watch: {
    [modelProp](value: string | number) {
      this.innerValue = value;
    },
  },
});
</script>
