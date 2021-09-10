<template>
  <fieldset class="options">
    <legend class="options__title">Options</legend>
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
@import '../../../packages/common/sass/components/variables';

.options {
  border-radius: $border-radius;
  border: 1px solid $gray-light;
  margin-bottom: 1.5rem;
  padding-top: 1rem;

  &__title {
    padding: 0 0.5rem;
  }
}
</style>
