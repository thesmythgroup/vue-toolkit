<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--disabled': disabled,
      'button--busy': busy,
    }"
    :disabled="busy || disabled"
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
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});
</script>
