<template>
  <p class="error">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-error',
});
</script>
