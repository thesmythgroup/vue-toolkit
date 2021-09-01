<template>
  <input
    type="text"
    class="input"
    :value="innerValue"
    @input="onInput($event)"
  />
</template>

<script lang="ts">
import Vue from 'vue';

import { formControl } from '../../mixins';

export default Vue.extend({
  name: 'v-input',
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
    onInput(event: Event) {
      const input = event.target as HTMLInputElement;

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
