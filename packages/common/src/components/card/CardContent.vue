<template>
  <div class="card__content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-card-content',
});
</script>
