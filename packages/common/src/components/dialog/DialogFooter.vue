<template>
  <footer class="dialog__footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-dialog-footer',
});
</script>
