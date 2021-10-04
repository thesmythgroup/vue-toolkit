<template>
  <div class="chip">
    <div class="chip__content">
      <slot />
    </div>
    <button
      type="button"
      class="chip__remove"
      v-if="showRemove"
      @click="handleRemove()"
    >
      &times;
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-chip',
  props: {
    showRemove: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleRemove = () => {
      emit('removed');
    };

    return { handleRemove };
  },
});
</script>
