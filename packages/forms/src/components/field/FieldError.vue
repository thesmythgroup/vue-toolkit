<template>
  <p class="field__error" v-if="show">
    <slot v-bind="{ error }" />
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from '@vue/composition-api';
import { FormControl } from '../../interfaces';

export default defineComponent({
  name: 'v-field-error',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const form = inject<{ submitted: Ref<boolean> } | null>(
      'form:context',
      null
    );
    const control = inject<Readonly<Ref<FormControl | null>>>(
      'field:control',
      null
    );

    const error = computed(() => control.value?.errors?.[props.name]);
    const show = computed(() => form?.submitted.value && !!error.value);

    return { error, show };
  },
});
</script>
