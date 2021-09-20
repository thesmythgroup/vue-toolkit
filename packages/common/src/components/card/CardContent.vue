<template>
  <div class="card__content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-card-content',
});
</script>
