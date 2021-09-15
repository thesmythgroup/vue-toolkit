<template>
  <p class="field__hint">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-field-hint',
});
</script>
