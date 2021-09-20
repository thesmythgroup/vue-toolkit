<template>
  <section class="p-4">
    <h2 class="mt-0">Textarea</h2>

    <v-textarea v-model="value"></v-textarea>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const value = ref(null);

    return {
      value,
    };
  },
});
</script>
