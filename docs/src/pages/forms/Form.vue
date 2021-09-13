<template>
  <section class="p-4">
    <h2 class="mt-0">Form</h2>

    <app-options>
      <v-button @click="loadAva" class="button--outline mr-2">
        Load "Ava"
      </v-button>
      <v-button @click="loadLucy" class="button--outline">
        Load "Lucy"
      </v-button>
    </app-options>

    <v-form :value="value" :validation-schema="schema" @submit="onSubmit">
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
          <v-option value="bird">Bird</v-option>
        </v-select>
      </v-field>

      <v-field label="Priority">
        <v-radio-group name="priority">
          <v-radio-button value="high">High</v-radio-button>
          <v-radio-button value="medium">Medium</v-radio-button>
          <v-radio-button value="low">Low</v-radio-button>
        </v-radio-group>
      </v-field>

      <v-field label="Awesome">
        <v-checkbox name="isAwesome"></v-checkbox>
      </v-field>

      <v-button type="submit">Submit</v-button>
    </v-form>

    <app-snippet>{{ submitted }}</app-snippet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormSubmitEvent } from '@vue-toolkit/forms';
import { required, minLength, maxLength } from '@vue-toolkit/forms/validators';

export default Vue.extend({
  data() {
    return {
      value: null as Record<string, unknown> | null,
      submitted: null as FormSubmitEvent | null,
      schema: {
        name: [required, minLength(3), maxLength(20)],
        type: [required],
        priority: [required],
      },
    };
  },
  methods: {
    loadAva() {
      this.value = {
        name: 'Ava',
        description: null,
        type: 'dog',
        priority: 'high',
        isAwesome: true,
      };
    },
    loadLucy() {
      this.value = {
        name: 'Lucy',
        description: null,
        type: 'cat',
        priority: 'low',
        isAwesome: false,
      };
    },
    onSubmit(event: FormSubmitEvent) {
      this.submitted = event;
    },
  },
});
</script>
