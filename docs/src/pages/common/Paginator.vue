<template>
  <section class="p-4">
    <app-info
      title="Paginator"
      component-source-path="/packages/common/src/components/paginator"
      docs-source-path="/docs/src/pages/common/Paginator.vue"
    />

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
import { defineComponent, ref } from '@vue/composition-api';
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
