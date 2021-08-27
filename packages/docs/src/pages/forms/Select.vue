<template>
  <section class="p-4">
    <h2 class="mt-0">Select</h2>

    <v-select v-model="value">
      <v-option value="1">Option #1</v-option>
      <v-option value="2">Option #2</v-option>
      <v-option value="3">Option #3</v-option>
    </v-select>

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
