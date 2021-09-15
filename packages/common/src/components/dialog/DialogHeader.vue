<template>
  <header class="dialog__header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-dialog-header',
});
</script>
