<template>
  <header class="card__header">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-card-header',
});
</script>
