<template>
  <form class="form" @submit="handleSubmit">
    <slot></slot>
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
    const { handleSubmit, setValue } = useForm(props, emit);

    watch(
      () => props.initialValue,
      (newValue) => setValue(newValue)
    );

    return {
      handleSubmit,
    };
  },
});
</script>
