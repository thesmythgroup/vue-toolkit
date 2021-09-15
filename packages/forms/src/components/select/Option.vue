<template>
  <option>
    <slot></slot>
  </option>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-option',
});
</script>
