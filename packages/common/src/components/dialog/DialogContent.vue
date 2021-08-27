<template>
  <div class="dialog__content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-dialog-content',
});
</script>
