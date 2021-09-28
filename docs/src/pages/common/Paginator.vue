<template>
  <app-info
    title="Paginator"
    component-source-path="/packages/common/src/components/paginator"
    docs-source-path="/docs/src/pages/common/Paginator.vue"
    :props="[
      {
        name: 'hide-page-size',
        description:
          'Whether to hide the page size selection UI from the user.',
      },
      {
        name: 'length',
        description:
          'The length of the total number of items that are being paginated.',
      },
      {
        name: 'page-size',
        description: 'Number of items to display on a page.',
      },
    ]"
    :events="[
      {
        name: 'page',
        description:
          'Change event object that is emitted when the user selects a different page size or navigates to another page.',
      },
    ]"
  >
    <app-options>
      <v-field label="Hide Page Size">
        <v-checkbox v-model="hidePageSize" />
      </v-field>
      <v-field label="Length">
        <v-input type="number" v-model.number="length" />
      </v-field>
    </app-options>

    <v-paginator
      :hide-page-size="hidePageSize"
      :length="length"
      :page-size="pageSize"
      @page="onPage"
    ></v-paginator>

    <app-snippet>{{ output }}</app-snippet>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { PageEvent } from '@vue-toolkit/common';

export default defineComponent({
  setup() {
    const hidePageSize = ref(false);
    const length = ref(500);
    const pageSize = ref(50);
    const output = ref<PageEvent | null>(null);
    const onPage = (event: PageEvent) => (output.value = event);

    return {
      hidePageSize,
      length,
      pageSize,
      output,
      onPage,
    };
  },
});
</script>
