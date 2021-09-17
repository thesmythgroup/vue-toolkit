<template>
  <select class="select" :value="innerValue" @change="onChange($event)">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent, isVue3 } from 'vue-demi';

import { formControl } from '../../mixins';

const modelProp = isVue3 ? 'modelValue' : 'value';
const modelEvent = isVue3 ? 'update:modelValue' : 'input';

export default defineComponent({
  name: 'v-select',
  mixins: [formControl],
  props: {
    name: String,
    [modelProp]: [String, Number],
  },
  data() {
    return {
      innerValue: this[modelProp],
    };
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLSelectElement;

      this.innerValue = input.value;
      this.$emit(modelEvent, input.value);
    },
  },
  watch: {
    [modelProp](value: string | number) {
      this.innerValue = value;
    },
  },
});
</script>
