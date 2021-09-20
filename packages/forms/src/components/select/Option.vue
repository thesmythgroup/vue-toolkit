<template>
  <option>
    <slot></slot>
  </option>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-option',
});
</script>
