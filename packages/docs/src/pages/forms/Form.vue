<template>
  <section class="p-4">
    <h2 class="mt-0">Form</h2>

    <v-form @submit="onSubmit">
      <v-field label="Name">
        <v-input name="name"></v-input>
      </v-field>

      <v-field label="Description">
        <v-textarea name="description"></v-textarea>
      </v-field>

      <v-field label="Type">
        <v-select name="type">
          <v-option value="dog">Dog</v-option>
          <v-option value="cat">Cat</v-option>
          <v-option value="bird">bird</v-option>
        </v-select>
      </v-field>

      <v-field label="Priority">
        <v-radio-group name="priority">
          <v-radio-button value="high">High</v-radio-button>
          <v-radio-button value="medium">Medium</v-radio-button>
          <v-radio-button value="low">Low</v-radio-button>
        </v-radio-group>
      </v-field>

      <v-field label="Active">
        <v-checkbox name="isActive"></v-checkbox>
      </v-field>

      <v-button type="submit">Submit</v-button>
    </v-form>

    <app-snippet>{{ submitted }}</app-snippet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormSubmitEvent } from '@vue-toolkit/forms';

export default Vue.extend({
  data() {
    return {
      submitted: null as FormSubmitEvent | null,
    };
  },
  methods: {
    onSubmit(event: FormSubmitEvent) {
      this.submitted = event;
    },
  },
});
</script>
