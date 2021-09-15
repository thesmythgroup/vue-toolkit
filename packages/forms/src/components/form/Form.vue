<template>
  <form class="form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, ComponentInstance } from 'vue-demi';

import { FormSubmitEvent } from './interfaces';
import { ValidatorFn } from '../../interfaces';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineComponent({
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
    validationSchema: {
      type: Object,
    },
  },
  data: () => ({
    controls: {} as Record<string, any>,
  }),
  methods: {
    addControl(name: string, comp: ComponentInstance) {
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
    getErrors() {
      const schema = this.validationSchema as Record<string, ValidatorFn[]>;

      if (!schema) {
        return null;
      }

      const formErrors = Object.entries(schema).reduce(
        (errors, [name, validators]) => {
          const control = this.controls[name];

          if (control && validators) {
            const ctrlValue = (control as any).innerValue;
            const ctrlErrors = validators.reduce((prev, validatorFn) => {
              const res = validatorFn(ctrlValue);

              return res ? { ...prev, ...res } : prev;
            }, {});

            if (Object.keys(ctrlErrors).length > 0) {
              return {
                ...errors,
                [name]: ctrlErrors,
              };
            }
          }

          return errors;
        },
        {}
      );

      return Object.keys(formErrors).length > 0 ? formErrors : null;
    },
    onSubmit(event: Event) {
      event.preventDefault();

      const errors = this.getErrors();
      const value = this.getValue();
      const isValid = errors === null;

      // todo: dirty, touched, etc
      const payload: FormSubmitEvent = {
        value,
        errors,
        valid: isValid,
        invalid: !isValid,
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
