<template>
  <app-info
    title="Select"
    component-source-path="/packages/forms/src/components/select"
    docs-source-path="/docs/src/pages/forms/Select.vue"
    :props="[
      {
        name: 'name',
        description: 'Name of the form control.',
        type: 'string',
      },
    ]"
  >
    <v-select v-model="value">
      <v-option value="1">Option #1</v-option>
      <v-option value="2">Option #2</v-option>
      <v-option value="3">Option #3</v-option>
    </v-select>

    <app-snippet>{{ value }}</app-snippet>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const value = ref(null);

    return {
      value,
    };
  },
});
</script>
