<template>
  <p class="field__error">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-field-error',
});
</script>
