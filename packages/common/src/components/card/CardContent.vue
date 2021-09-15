<template>
  <div class="card__content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-card-content',
});
</script>
