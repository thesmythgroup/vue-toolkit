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
import { defineComponent, ref } from 'vue';
import { PageEvent } from '@vue-toolkit/common';

export default defineComponent({
  setup() {
    const length = ref(500);
    const pageSize = ref(50);
    const output = ref<PageEvent | null>(null);
    const onPage = (event: PageEvent) => (output.value = event);

    return {
      length,
      pageSize,
      output,
      onPage,
    };
  },
});
</script>
