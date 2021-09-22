<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--block': block,
      'button--busy': busy,
      'button--clear': clear,
      'button--disabled': disabled,
      'button--outline': outline,
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
    outline: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
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
