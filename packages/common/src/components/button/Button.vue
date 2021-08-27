<template>
  <button type="button" class="button" :disabled="isDisabled" @click="onClick">
    <slot name="busy" v-if="busy">Loading ...</slot>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-button',
  props: {
    busy: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDisabled(): boolean {
      return this.busy || this.disabled;
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});
</script>
