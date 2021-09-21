<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--disabled': disabled,
      'button--busy': busy,
    }"
    :disabled="busy || disabled"
    @click="handleClick"
  >
    <slot name="busy" v-if="busy">Loading ...</slot>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

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
  setup(props, { emit }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { handleClick };
  },
});
</script>
