<template>
  <section class="p-4">
    <h2 class="mt-0">Tabs</h2>

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
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    disabled: false,
  }),
});
</script>
