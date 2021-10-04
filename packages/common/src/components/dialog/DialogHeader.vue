<template>
  <header class="dialog__header">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-dialog-header',
});
</script>
