<template>
  <option>
    <slot></slot>
  </option>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-option',
});
</script>
