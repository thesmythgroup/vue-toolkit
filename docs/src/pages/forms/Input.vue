<template>
  <section class="p-4">
    <h2 class="mt-0">Input</h2>

    <v-input v-model="value"></v-input>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      value: null,
    };
  },
});
</script>
