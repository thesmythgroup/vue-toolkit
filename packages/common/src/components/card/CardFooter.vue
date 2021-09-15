<template>
  <footer class="card__footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-card-footer',
});
</script>
