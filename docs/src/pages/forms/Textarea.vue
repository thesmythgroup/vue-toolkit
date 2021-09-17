<template>
  <section class="p-4">
    <h2 class="mt-0">Textarea</h2>

    <v-textarea v-model="value"></v-textarea>

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
