<template>
  <input
    type="text"
    class="input"
    :value="innerValue"
    @input="onInput($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

import { formControl } from '../../mixins';

export default defineComponent({
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
