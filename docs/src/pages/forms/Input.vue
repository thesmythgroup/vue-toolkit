<template>
  <app-info
    title="Input"
    component-source-path="/packages/forms/src/components/input"
    docs-source-path="/docs/src/pages/forms/Input.vue"
    :props="[{ name: 'name', description: 'Name of the form control.' }]"
  >
    <v-input v-model="value"></v-input>

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
