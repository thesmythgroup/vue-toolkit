<template>
  <input type="text" class="input" :value="value" @input="onInput($event)" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-input',
  props: {
    value: [String, Number],
  },
  methods: {
    onInput(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit('input', input.value);
    },
  },
});
</script>
