<template>
  <aside class="sidebar">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-sidebar',
});
</script>
