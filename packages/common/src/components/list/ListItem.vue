<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-list-item',
});
</script>
