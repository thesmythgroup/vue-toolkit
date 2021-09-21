<template>
  <section class="p-4">
    <app-info
      title="Progress Bar"
      component-source-path="/packages/common/src/components/progress-bar"
      docs-source-path="/docs/src/pages/common/ProgressBar.vue"
    />

    <app-options>
      <v-field label="Value">
        <v-input type="number" v-model.number="value" />
      </v-field>
    </app-options>

    <v-progress-bar :value="value"></v-progress-bar>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const value = ref(83);

    return {
      value,
    };
  },
});
</script>
