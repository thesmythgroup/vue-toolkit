<template>
  <div
    role="progress-bar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    class="progress-bar"
  >
    <div class="progress-bar__progress" :style="{ width: value + '%' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-progress-bar',
  props: {
    value: Number,
  },
});
</script>
