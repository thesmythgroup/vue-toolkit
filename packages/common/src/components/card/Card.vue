<template>
  <div class="card">
    <!-- header -->
    <slot name="v-card-header" v-if="showHeader"></slot>

    <!-- content -->
    <slot></slot>

    <!-- footer -->
    <slot name="v-card-footer" v-if="showFooter"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-card',
  data() {
    return {
      showHeader: false,
      showFooter: false,
    };
  },
  mounted() {
    this.showHeader = !!this.$slots.header;
    this.showFooter = !!this.$slots.footer;
  },
});
</script>
