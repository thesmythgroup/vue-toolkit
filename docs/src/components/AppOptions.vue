<template>
  <fieldset class="options">
    <legend>Options</legend>
    <slot />
  </fieldset>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-options',
});
</script>

<style lang="scss" scoped>
.options {
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
}
</style>
