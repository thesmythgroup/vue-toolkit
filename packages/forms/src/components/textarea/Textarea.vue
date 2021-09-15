<template>
  <textarea
    class="textarea"
    :value="innerValue"
    @input="onInput($event)"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

import { formControl } from '../../mixins';

export default defineComponent({
  name: 'v-textarea',
  mixins: [formControl],
  props: {
    name: String,
    value: String,
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  methods: {
    onInput(event: Event) {
      const input = event.target as HTMLTextAreaElement;

      this.innerValue = input.value;
      this.$emit('input', input.value);
    },
  },
  watch: {
    value(value: string) {
      this.innerValue = value;
    },
  },
});
</script>
