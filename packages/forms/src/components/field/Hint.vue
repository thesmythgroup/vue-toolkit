<template>
  <p class="hint">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-hint',
});
</script>
