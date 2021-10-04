<template>
  <aside class="sidebar">
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-sidebar',
});
</script>
