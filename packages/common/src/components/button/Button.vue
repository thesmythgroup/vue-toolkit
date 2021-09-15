<template>
  <button
    type="button"
    class="button"
    :class="{ 'button--disabled': isDisabled }"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot name="busy" v-if="busy">Loading ...</slot>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
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
