<template>
  <aside class="sidebar">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-sidebar',
});
</script>
