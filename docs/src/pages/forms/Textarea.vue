<template>
  <section class="p-4">
    <app-info
      title="Textarea"
      component-source-path="/packages/forms/src/components/textarea"
      docs-source-path="/docs/src/pages/forms/Textarea.vue"
    />

    <v-textarea v-model="value"></v-textarea>

    <app-snippet>{{ value }}</app-snippet>
  </section>
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
