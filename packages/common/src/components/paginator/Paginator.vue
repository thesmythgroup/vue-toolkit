<template>
  <!-- todo: i18n -->
  <section class="paginator">
    <!-- pages -->
    <select
      class="paginator__page-size"
      v-model="currentSize"
      @change="onPageSizeChange"
    >
      <option
        v-for="(item, index) in pageSizeOptions"
        :key="index"
        :value="item"
      >
        {{ item }}
      </option>
    </select>

    <!-- info -->
    <p class="paginator__range">
      Page {{ currentIndex + 1 }} of {{ totalPages }}
    </p>

    <!-- nav -->
    <div class="paginator__buttons">
      <v-button
        class="paginator__prev"
        @click="onPrev"
        :disabled="isPrevDisabled"
      >
        Prev
      </v-button>
      <v-button
        class="paginator__next"
        @click="onNext"
        :disabled="isNextDisabled"
      >
        Next
      </v-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { PageEvent } from './interfaces';

export default defineComponent({
  name: 'v-paginator',
  props: {
    length: {
      type: Number,
      default: 0,
    },
    pageIndex: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 50,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [25, 50, 100],
    },
  },
  data() {
    return {
      currentIndex: 0,
      currentSize: 0,
    };
  },
  created() {
    this.currentIndex = this.pageIndex;
    this.currentSize = this.pageSize;
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.length / this.currentSize);
    },
    isPrevDisabled(): boolean {
      return this.currentIndex <= 0;
    },
    isNextDisabled(): boolean {
      return this.currentIndex >= this.totalPages - 1;
    },
  },
  methods: {
    onPageSizeChange() {
      this.currentIndex = 0;
      this.emitPage();
    },
    onPrev() {
      if (this.isPrevDisabled) {
        return;
      }

      this.currentIndex--;
      this.emitPage();
    },
    onNext() {
      if (this.isNextDisabled) {
        return;
      }

      this.currentIndex++;
      this.emitPage();
    },
    emitPage() {
      const payload: PageEvent = {
        pageIndex: this.currentIndex,
        pageSize: this.currentSize,
      };

      this.$emit('page', payload);
    },
  },
});
</script>
