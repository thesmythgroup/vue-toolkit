<template>
  <option :value="value">
    <slot />
  </option>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-option',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>
