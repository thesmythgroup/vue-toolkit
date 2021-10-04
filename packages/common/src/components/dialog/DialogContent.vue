<template>
  <div class="dialog__content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-dialog-content',
});
</script>
