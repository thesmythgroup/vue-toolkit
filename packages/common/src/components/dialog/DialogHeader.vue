<template>
  <header class="dialog__header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-dialog-header',
});
</script>
