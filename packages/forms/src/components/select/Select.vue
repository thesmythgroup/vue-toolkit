<template>
  <select class="select" :value="value" @change="onChange($event)">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-select',
  props: {
    value: [String, Number],
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit('input', input.value);
    },
  },
});
</script>
