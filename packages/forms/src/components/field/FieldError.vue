<template>
  <p class="field__error">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-field-error',
});
</script>
