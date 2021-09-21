<template>
  <section class="p-4">
    <app-info
      title="Radio Group"
      component-source-path="/packages/forms/src/components/radio-group"
      docs-source-path="/docs/src/pages/forms/RadioGroup.vue"
    />

    <v-radio-group v-model="value">
      <v-radio-button value="1">Item #1</v-radio-button>
      <v-radio-button value="2">Item #2</v-radio-button>
      <v-radio-button value="3">Item #3</v-radio-button>
    </v-radio-group>

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
