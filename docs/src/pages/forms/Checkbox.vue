<template>
  <section class="p-4">
    <app-info
      title="Checkbox"
      component-source-path="/packages/forms/src/components/checkbox"
      docs-source-path="/docs/src/pages/forms/Checkbox.vue"
    />

    <v-checkbox v-model="value">Example</v-checkbox>

    <app-snippet>{{ value }}</app-snippet>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const value = ref(false);

    return {
      value,
    };
  },
});
</script>
