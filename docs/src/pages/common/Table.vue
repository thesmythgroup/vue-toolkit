<template>
  <section class="p-4">
    <h2 class="mt-0">Table</h2>

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
  </section>
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
