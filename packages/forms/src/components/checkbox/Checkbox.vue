<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      v-bind="$attrs"
      :checked="innerValue"
      @change="onChange($event)"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, isVue3 } from 'vue-demi';

import { formControl } from '../../mixins';

const modelProp = isVue3 ? 'modelValue' : 'value';
const modelEvent = isVue3 ? 'update:modelValue' : 'input';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  mixins: [formControl],
  props: {
    name: String,
    [modelProp]: Boolean,
  },
  data() {
    return {
      innerValue: this[modelProp],
    };
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLInputElement;

      this.innerValue = input.checked;
      this.$emit(modelEvent, input.checked);
    },
  },
  watch: {
    [modelProp](value: boolean) {
      this.innerValue = value;
    },
  },
});
</script>
