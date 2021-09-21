<template>
  <section class="p-4">
    <app-info
      title="Tabs"
      component-source-path="/packages/common/src/components/tabs"
      docs-source-path="/docs/src/pages/common/Tabs.vue"
    />

    <app-options>
      <v-field>
        <v-checkbox v-model="disabled">Disable "Tab #3"</v-checkbox>
      </v-field>
    </app-options>

    <v-tabs>
      <v-tab title="Tab #1"> Content for tab #1. </v-tab>
      <v-tab title="Tab #2"> Content for tab #2. </v-tab>
      <v-tab title="Tab #3" :disabled="disabled"> Content for tab #3. </v-tab>
    </v-tabs>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const disabled = ref(false);

    return {
      disabled,
    };
  },
});
</script>
