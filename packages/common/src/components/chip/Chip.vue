<template>
  <div class="chip">
    <div class="chip__content">
      <slot></slot>
    </div>
    <button
      type="button"
      class="chip__remove"
      v-if="showRemove"
      @click="onRemove()"
    >
      &times;
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-chip',
  props: {
    showRemove: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRemove() {
      this.$emit('removed');
    },
  },
});
</script>
