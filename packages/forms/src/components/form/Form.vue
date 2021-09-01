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
  props: {
    value: {
      type: Object,
    },
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
    getValue() {
      return Object.entries(this.controls).reduce(
        (value, [name, control]) => ({
          ...value,
          [name]: (control as any).innerValue,
        }),
        {}
      );
    },
    setValue(value: Record<string, unknown>) {
      Object.entries(this.controls).forEach(([name, control]) => {
        if (name in value) {
          (control as any).innerValue = value[name];
        }
      });
    },
    onSubmit(event: Event) {
      event.preventDefault();

      // todo: validation, dirty, touched, etc
      const payload: FormSubmitEvent = {
        value: (this as any).getValue(),
      };

      this.$emit('submit', payload);
    },
  },
  watch: {
    value(value: Record<string, unknown>) {
      if (!value) {
        return;
      }

      this.setValue(value);
    },
  },
});
</script>
