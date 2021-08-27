<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      v-bind="$attrs"
      :checked="value"
      @change="onChange($event)"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-checkbox',
  inheritAttrs: false,
  props: {
    value: Boolean,
  },
  methods: {
    onChange(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit('input', input.checked);
    },
  },
});
</script>
