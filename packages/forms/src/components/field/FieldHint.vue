<template>
  <p class="field__hint">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-field-hint',
});
</script>
