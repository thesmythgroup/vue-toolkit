<template>
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
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';

import Cell from './Cell.vue';
import Header from './Header.vue';

export default Vue.extend({
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
  data() {
    return {
      columns: [] as VNode[],
    };
  },
  mounted() {
    if (this.$slots.default) {
      this.columns = this.$slots.default;
    }
  },
});
</script>
