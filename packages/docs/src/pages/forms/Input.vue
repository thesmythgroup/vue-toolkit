<template>
  <section class="p-4">
    <h2 class="mt-0">Input</h2>

    <v-input v-model="value"></v-input>

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
