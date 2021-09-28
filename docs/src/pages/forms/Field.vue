<template>
  <app-info
    title="Field"
    component-source-path="/packages/forms/src/components/field"
    docs-source-path="/docs/src/pages/forms/Field.vue"
    :props="[
      {
        name: 'label',
        description: 'Label to display associated to the form control.',
      },
    ]"
  >
    <v-field label="Example">
      <v-input name="example1"></v-input>
    </v-field>

    <v-field label="Example with hint">
      <v-input name="example2"></v-input>
      <v-field-hint>Enter something awesome</v-field-hint>
    </v-field>

    <v-field label="Example with error">
      <v-input name="example3"></v-input>
      <v-field-error>This field is required</v-field-error>
    </v-field>
  </app-info>
</template>
