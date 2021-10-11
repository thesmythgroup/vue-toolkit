<template>
  <form
    @submit="handleSubmit"
    class="form"
    :class="{
      'form--dirty': dirty,
      'form--invalid': !valid,
      'form--pristine': !dirty,
      'form--touched': touched,
      'form--untouched': !touched,
      'form--valid': valid,
      'form--disabled': disabled,
    }"
  >
    <slot
      v-bind="{
        dirty,
        errors,
        reset,
        submitted,
        touched,
        valid,
        value,
      }"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';

import { useForm } from '../../composition';

export default defineComponent({
  name: 'v-form',
  emits: ['submit'],
  props: {
    initialValue: {
      type: Object,
    },
    validationSchema: {
      type: Object,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const {
      dirty,
      errors,
      handleSubmit,
      reset,
      setValue,
      submitted,
      touched,
      valid,
      value,
    } = useForm(props, emit);

    watch(
      () => props.initialValue,
      (newValue) => setValue(newValue)
    );

    return {
      dirty,
      errors,
      handleSubmit,
      reset,
      submitted,
      touched,
      valid,
      value,
    };
  },
});
</script>
