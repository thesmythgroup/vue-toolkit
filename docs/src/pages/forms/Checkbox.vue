<template>
  <section class="p-4">
    <h2 class="mt-0">Checkbox</h2>

    <v-checkbox v-model="value">Example</v-checkbox>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(false);

    return {
      value,
    };
  },
});
</script>
