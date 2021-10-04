<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-list',
});
</script>
