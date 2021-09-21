<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <v-header
            v-for="column in columns"
            :key="column.id"
            :column="column"
          ></v-header>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <v-cell
            v-for="column in columns"
            :key="column.id"
            :column="column"
            :row="row"
          ></v-cell>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';

import Cell from './Cell.vue';
import Header from './Header.vue';

export default defineComponent({
  name: 'v-table',
  components: {
    'v-cell': Cell,
    'v-header': Header,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props, { slots }) {
    const columns = ref([]);

    onMounted(() => {
      if (slots.default) {
        columns.value = slots.default();
      }
    });

    return { columns };
  },
});
</script>
