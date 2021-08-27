<template>
  <footer class="dialog__footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-dialog-footer',
});
</script>
