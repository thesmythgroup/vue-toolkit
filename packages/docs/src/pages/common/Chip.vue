<template>
  <section class="p-4">
    <h2 class="mt-0">Chip</h2>

    <app-options>
      <v-field>
        <v-checkbox v-model="showRemove">Show Remove</v-checkbox>
      </v-field>
    </app-options>

    <v-chip :showRemove="showRemove" @removed="onRemove()"> Chip </v-chip>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      showRemove: false,
    };
  },
  methods: {
    onRemove() {
      alert('Chip removed!');
    },
  },
});
</script>
