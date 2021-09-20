<template>
  <section class="p-4">
    <h2 class="mt-0">Form</h2>

    <app-options>
      <v-button @click="load(1)" class="button--outline mr-2">
        Load "Ava"
      </v-button>
      <v-button @click="load(2)" class="button--outline">
        Load "Lucy"
      </v-button>
    </app-options>

    <v-form
      :initial-value="initialValue"
      :validation-schema="schema"
      @submit="onSubmit"
    >
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
import { defineComponent, ref } from '@vue/composition-api';
import { FormSubmitEvent } from '@vue-toolkit/forms';
import { required, minLength, maxLength } from '@vue-toolkit/forms/validators';

export default defineComponent({
  setup() {
    const initialValue = ref<Record<string, unknown> | null>(null);
    const submitted = ref<FormSubmitEvent | null>(null);
    const schema = ref({
      name: [required, minLength(3), maxLength(20)],
      type: [required],
      priority: [required],
    });

    const load = (id: number) => {
      let data: Record<string, unknown> | null = null;

      switch (id) {
        case 1:
          data = {
            name: 'Ava',
            description: null,
            type: 'dog',
            priority: 'high',
            isAwesome: true,
          };
          break;
        case 2:
          data = {
            name: 'Lucy',
            description: null,
            type: 'cat',
            priority: 'low',
            isAwesome: false,
          };
          break;
        default:
          data = null;
          break;
      }

      initialValue.value = data;
    };

    const onSubmit = (event: FormSubmitEvent) => {
      submitted.value = event;
    };

    return {
      initialValue,
      submitted,
      schema,
      load,
      onSubmit,
    };
  },
});
</script>
