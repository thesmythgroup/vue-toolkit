<template>
  <section class="p-4">
    <h2 class="mt-0">Paginator</h2>

    <app-options>
      <v-field label="Length">
        <v-input type="number" v-model.number="length" />
      </v-field>
    </app-options>

    <v-paginator
      :length="length"
      :page-size="pageSize"
      @page="onPage"
    ></v-paginator>

    <app-snippet>{{ output }}</app-snippet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { PageEvent } from '@vue-toolkit/common';

export default Vue.extend({
  data() {
    return {
      length: 500,
      pageSize: 50,
      output: null as PageEvent | null,
    };
  },
  methods: {
    onPage(event: PageEvent) {
      this.output = event;
    },
  },
});
</script>
