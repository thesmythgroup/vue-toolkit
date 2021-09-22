<template>
  <!-- todo: i18n -->
  <section class="paginator">
    <!-- pages -->
    <select
      class="paginator__page-size"
      v-model="currentSize"
      @change="handlePageSizeChange"
      v-if="showPageSize"
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
        @click="handlePrev"
        :disabled="isPrevDisabled"
      >
        Prev
      </v-button>
      <v-button
        class="paginator__next"
        @click="handleNext"
        :disabled="isNextDisabled"
      >
        Next
      </v-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from '@vue/composition-api';

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
    showPageSize: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const currentIndex = ref(props.pageIndex);
    const currentSize = ref(props.pageSize);
    const totalPages = computed(() =>
      Math.ceil(props.length / currentSize.value)
    );
    const isPrevDisabled = computed(() => currentIndex.value <= 0);
    const isNextDisabled = computed(
      () => currentIndex.value >= totalPages.value - 1
    );

    const emitPage = () => {
      const payload: PageEvent = {
        pageIndex: unref(currentIndex),
        pageSize: unref(currentSize),
      };

      emit('page', payload);
    };

    const handlePageSizeChange = () => {
      currentIndex.value = 0;
      emitPage();
    };

    const handlePrev = () => {
      if (isPrevDisabled.value) {
        return;
      }

      currentIndex.value--;
      emitPage();
    };

    const handleNext = () => {
      if (isNextDisabled.value) {
        return;
      }

      currentIndex.value++;
      emitPage();
    };

    return {
      currentIndex,
      currentSize,
      isNextDisabled,
      isPrevDisabled,
      totalPages,
      handlePageSizeChange,
      handlePrev,
      handleNext,
    };
  },
});
</script>
