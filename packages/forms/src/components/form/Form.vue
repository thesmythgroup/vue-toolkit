<template>
  <form class="form" @submit="handleSubmit">
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
