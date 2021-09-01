<template>
  <section class="p-4">
    <h2 class="mt-0">Radio Group</h2>

    <v-radio-group v-model="value">
      <v-radio-button value="1">Item #1</v-radio-button>
      <v-radio-button value="2">Item #2</v-radio-button>
      <v-radio-button value="3">Item #3</v-radio-button>
    </v-radio-group>

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
