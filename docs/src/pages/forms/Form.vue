<template>
  <app-info
    title="Form"
    component-source-path="/packages/forms/src/components/form"
    docs-source-path="/docs/src/pages/forms/Form.vue"
    :props="[
      {
        name: 'initial-value',
        description: 'Initial values to fill the fields with.',
        type: 'object',
      },
      {
        name: 'validation-schema',
        description: 'An object describing a schema to validate fields with.',
        type: 'object',
      },
    ]"
  >
    <app-options>
      <v-button @click="load(1)" outline class="mr-2"> Load "Ava" </v-button>
      <v-button @click="load(2)" outline> Load "Lucy" </v-button>
    </app-options>

    <v-form
      :initial-value="initialValue"
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ touched, dirty, valid, reset, submitted }"
    >
      <v-field label="Name">
        <v-input name="name"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
        <v-field-error name="minLength" v-slot="{ error }">
          Must be {{ error.required }} characters or more
        </v-field-error>
        <v-field-error name="maxLength" v-slot="{ error }">
          Must be {{ error.required }} characters or less
        </v-field-error>
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
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Priority">
        <v-radio-group name="priority">
          <v-radio-button value="high">High</v-radio-button>
          <v-radio-button value="medium">Medium</v-radio-button>
          <v-radio-button value="low">Low</v-radio-button>
        </v-radio-group>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Awesome">
        <v-checkbox name="isAwesome"></v-checkbox>
      </v-field>

      <v-field label="Level">
        <v-form-control name="level" v-slot="{ id, handleBlur, handleInput }">
          <input
            type="number"
            class="input"
            v-bind="{ id }"
            v-on="{ blur: handleBlur, input: handleInput }"
          />
        </v-form-control>
        <v-field-error name="required">Field is required</v-field-error>
        <v-field-error name="min" v-slot="{ error }">
          Must be {{ error.required }} or greater
        </v-field-error>
        <v-field-error name="max" v-slot="{ error }">
          Must be {{ error.required }} or less
        </v-field-error>
      </v-field>

      <v-button class="mr-1" outline @click="reset">Reset</v-button>
      <v-button type="submit">Submit</v-button>

      <ul>
        <li>Submitted: {{ submitted }}</li>
        <li>Valid: {{ valid }}</li>
        <li>Touched: {{ touched }}</li>
        <li>Dirty: {{ dirty }}</li>
      </ul>
    </v-form>

    <app-snippet>{{ submitted }}</app-snippet>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

export default defineComponent({
  setup() {
    const initialValue = ref<Record<string, unknown> | null>(null);
    const submitted = ref<FormSubmitEvent | null>(null);
    const schema = ref({
      name: [
        validators.required,
        validators.minLength(3),
        validators.maxLength(20),
      ],
      type: [validators.required],
      priority: [validators.required],
      level: [validators.required, validators.min(1), validators.max(10)],
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
