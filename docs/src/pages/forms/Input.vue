<template>
  <app-info
    title="Input"
    component-source-path="/packages/forms/src/components/input"
    docs-source-path="/docs/src/pages/forms/Input.vue"
    :props="[
      {
        name: 'name',
        description: 'Name of the form control.',
        type: 'string',
      },
      {
        name: 'type',
        description: `The type of the form control. Setting this value will override the default 'type='text'' at runtime. Permitted values are listed in <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types'>input types</a>.`,
        type: 'string',
      },
    ]"
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
