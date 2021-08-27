<template>
  <header class="card__header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-card-header',
});
</script>
