<template>
  <p class="field__error" v-if="show">
    <slot v-bind="{ error }" />
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from '@vue/composition-api';
import { FormControlRef } from '../../interfaces';

export default defineComponent({
  name: 'v-field-error',
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const form = inject<{ submitted: Ref<boolean> } | null>(
      'form:context',
      null
    );
    const control = inject<Readonly<Ref<FormControlRef | null>>>(
      'field:control',
      null
    );

    const error = computed(() =>
      props.name ? control.value?.errors?.[props.name] : null
    );
    const show = computed(
      () => form?.submitted.value && (!props.name || !!error.value)
    );

    return { error, show };
  },
});
</script>
