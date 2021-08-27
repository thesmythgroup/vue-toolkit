<template>
  <section class="p-4">
    <h2 class="mt-0">Field</h2>

    <v-field label="Example">
      <v-input name="example1"></v-input>
    </v-field>

    <v-field label="Example with hint">
      <v-input name="example2"></v-input>
      <v-hint>Enter something awesome</v-hint>
    </v-field>

    <v-field label="Example with error">
      <v-input name="example3"></v-input>
      <v-error>This field is required</v-error>
    </v-field>
  </section>
</template>
