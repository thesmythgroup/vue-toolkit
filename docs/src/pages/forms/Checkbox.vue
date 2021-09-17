<template>
  <section class="p-4">
    <h2 class="mt-0">Checkbox</h2>

    <v-checkbox v-model="value">Example</v-checkbox>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      value: false,
    };
  },
});
</script>
