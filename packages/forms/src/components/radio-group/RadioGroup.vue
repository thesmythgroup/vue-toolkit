<template>
  <div role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-radio-group',
  props: {
    value: [String, Number],
  },
  methods: {
    onChange(value: string | number) {
      this.$emit('input', value);
    },
  },
});
</script>
