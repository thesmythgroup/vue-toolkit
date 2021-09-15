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
import { defineComponent } from 'vue-demi';

import { formControl } from '../../mixins';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  mixins: [formControl],
  props: {
    name: String,
    value: Boolean,
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLInputElement;

      this.innerValue = input.checked;
      this.$emit('input', input.checked);
    },
  },
  watch: {
    value(value: boolean) {
      this.innerValue = value;
    },
  },
});
</script>
