<template>
  <section class="p-4">
    <h2 class="mt-0">Button</h2>

    <app-options>
      <v-field>
        <v-checkbox v-model="disabled">Disabled</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="busy">Busy</v-checkbox>
      </v-field>
    </app-options>

    <v-button class="mr-2" @click="onClick()" :disabled="disabled" :busy="busy">
      Button
    </v-button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    disabled: false,
    busy: false,
  }),
  methods: {
    onClick() {
      alert('Button clicked!');
    },
  },
});
</script>
