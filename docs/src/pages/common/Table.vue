<template>
  <app-info
    title="Table"
    component-source-path="/packages/common/src/components/table"
    docs-source-path="/docs/src/pages/common/Table.vue"
    :props="[{ name: 'data', description: `The table's source of data` }]"
  >
    <v-table :data="items">
      <v-column v-slot="{ row }"> # {{ row.id }} </v-column>
      <v-column label="Name" v-slot="{ row }">
        {{ row.name }}
      </v-column>
      <v-column>
        <template #header>
          Homeworld 🚀 (<a href="#">custom template</a>)
        </template>
        <template v-slot="{ row }">
          <a href="#">{{ row.homeworld }}</a>
        </template>
      </v-column>
    </v-table>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const items = ref([
      { id: 1, name: 'Luke Skywalker', homeworld: 'Tatooine' },
      { id: 2, name: 'Han Solo', homeworld: 'Corellia' },
      { id: 3, name: 'Darth Vadar', homeworld: 'Tatooine' },
      { id: 4, name: 'Yoda', homeworld: 'unknown' },
      { id: 5, name: 'Obi-Wan', homeworld: 'Stewjon' },
    ]);

    return {
      items,
    };
  },
});
</script>
