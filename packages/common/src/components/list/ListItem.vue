<template>
  <li class="list__item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-list-item',
});
</script>
