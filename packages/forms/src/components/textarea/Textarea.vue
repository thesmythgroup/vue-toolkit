<template>
  <textarea
    class="textarea"
    :value="innerValue"
    @input="onInput($event)"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, isVue3 } from 'vue-demi';

import { formControl } from '../../mixins';

const modelProp = isVue3 ? 'modelValue' : 'value';
const modelEvent = isVue3 ? 'update:modelValue' : 'input';

export default defineComponent({
  name: 'v-textarea',
  mixins: [formControl],
  props: {
    name: String,
    [modelProp]: String,
  },
  data() {
    return {
      innerValue: this[modelProp],
    };
  },
  methods: {
    onInput(event: Event) {
      const input = event.target as HTMLTextAreaElement;

      this.innerValue = input.value;
      this.$emit(modelEvent, input.value);
    },
  },
  watch: {
    [modelProp](value: string) {
      this.innerValue = value;
    },
  },
});
</script>
