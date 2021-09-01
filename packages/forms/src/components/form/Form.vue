<template>
  <form class="form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import { FormSubmitEvent } from './interfaces';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default Vue.extend({
  name: 'v-form',
  provide() {
    return {
      form: {
        addControl: (this as any).addControl,
        removeControl: (this as any).removeControl,
      },
    };
  },
  data: () => ({
    controls: {} as Record<string, any>,
  }),
  methods: {
    addControl(name: string, comp: Vue) {
      if (!name) {
        return;
      }

      this.controls[name] = comp;
    },
    removeControl(name: string) {
      if (!name) {
        return;
      }

      delete this.controls[name];
    },
    getValues() {
      const keys = Object.keys(this.controls);

      return keys.reduce(
        (value, key) => ({ ...value, [key]: this.controls[key].innerValue }),
        {}
      );
    },
    onSubmit(event: Event) {
      event.preventDefault();

      // todo: validation
      const payload: FormSubmitEvent = {
        values: (this as any).getValues(),
      };

      this.$emit('submit', payload);
    },
  },
});
</script>
