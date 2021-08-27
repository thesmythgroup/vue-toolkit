<template>
  <footer class="card__footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-card-footer',
});
</script>
