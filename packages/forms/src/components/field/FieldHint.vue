<template>
  <p class="field-hint">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-field-hint',
});
</script>
