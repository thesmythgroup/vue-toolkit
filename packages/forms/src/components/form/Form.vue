<template>
  <form class="form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import { FormSubmitEvent } from './interfaces';

export default Vue.extend({
  name: 'v-form',
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();

      // todo: validation, values
      const payload: FormSubmitEvent = {};

      this.$emit('submit', payload);
    },
  },
});
</script>
