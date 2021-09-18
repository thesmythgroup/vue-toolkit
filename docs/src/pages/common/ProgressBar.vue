<template>
  <section class="p-4">
    <h2 class="mt-0">Progress Bar</h2>

    <app-options>
      <v-field label="Value">
        <v-input type="number" v-model.number="value" />
      </v-field>
    </app-options>

    <v-progress-bar :value="value"></v-progress-bar>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(83);

    return {
      value,
    };
  },
});
</script>
