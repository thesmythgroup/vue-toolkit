<template>
  <form class="form" @submit="handleSubmit">
    <slot v-bind="{ errors, value, touched, dirty, valid, submitted }" />
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
      handleSubmit,
      setValue,
      errors,
      value,
      touched,
      dirty,
      valid,
      submitted,
    } = useForm(props, emit);

    watch(
      () => props.initialValue,
      (newValue) => setValue(newValue)
    );

    return {
      errors,
      value,
      touched,
      dirty,
      valid,
      submitted,
      handleSubmit,
    };
  },
});
</script>
