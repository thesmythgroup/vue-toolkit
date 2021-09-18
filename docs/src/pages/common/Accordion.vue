<template>
  <section class="p-4">
    <h2 class="mt-0">Accordion</h2>

    <app-options>
      <v-field>
        <v-checkbox v-model="allowMultiple">Allow Multiple</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="disabled">Disable "Item #3"</v-checkbox>
      </v-field>
    </app-options>

    <v-accordion :allow-multiple="allowMultiple">
      <v-accordion-item>
        <template #title>Item #1 🚀 (custom template)</template>
        Content for item #1.
      </v-accordion-item>

      <v-accordion-item title="Item #2">
        Content for item #2.
      </v-accordion-item>

      <v-accordion-item title="Item #3" :disabled="disabled">
        Content for item #3.
      </v-accordion-item>
    </v-accordion>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const allowMultiple = ref(false);
    const disabled = ref(false);

    return { allowMultiple, disabled };
  },
});
</script>
