<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-list',
});
</script>
