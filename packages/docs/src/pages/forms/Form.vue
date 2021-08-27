<template>
  <section class="p-4">
    <h2 class="mt-0">Form</h2>

    <v-form @submit="onSubmit">
      <v-field label="Name">
        <v-input v-model="data.name"></v-input>
      </v-field>

      <v-field label="Description">
        <v-textarea v-model="data.description"></v-textarea>
      </v-field>

      <v-field label="Active">
        <v-checkbox v-model="data.isActive"></v-checkbox>
      </v-field>

      <v-button type="submit">Submit</v-button>
    </v-form>

    <app-snippet>{{ submitted }}</app-snippet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    data: {
      name: null,
      description: null,
      isActive: false,
    },
    submitted: null as Record<string, unknown> | null,
  }),
  methods: {
    onSubmit() {
      this.submitted = { ...this.data };
    },
  },
});
</script>
