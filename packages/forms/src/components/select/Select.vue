<template>
  <select class="select" :value="innerValue" @change="onChange($event)">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

import { formControl } from '../../mixins';

export default defineComponent({
  name: 'v-select',
  mixins: [formControl],
  props: {
    name: String,
    value: [String, Number],
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLSelectElement;

      this.innerValue = input.value;
      this.$emit('input', input.value);
    },
  },
  watch: {
    value(value: string | number) {
      this.innerValue = value;
    },
  },
});
</script>
