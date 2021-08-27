<template>
  <section class="p-4">
    <h2 class="mt-0">Textarea</h2>

    <v-textarea v-model="value"></v-textarea>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    value: null,
  }),
});
</script>
