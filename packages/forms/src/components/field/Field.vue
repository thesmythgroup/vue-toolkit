<template>
  <div class="field">
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
    </label>
    <div class="field__control">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from '@vue/composition-api';

import { FieldSetControlFn, FieldSetIdFn, FormControl } from '../../interfaces';

export default defineComponent({
  name: 'v-field',
  props: {
    label: String,
  },
  setup() {
    const id = ref<string>(null);
    const control = ref<FormControl | null>(null);

    const setId: FieldSetIdFn = (value) => {
      id.value = value;
    };

    const setControl: FieldSetControlFn = (ctrl) => {
      control.value = ctrl;
    };

    provide('field:setId', setId);
    provide('field:setControl', setControl);

    return {
      id,
      control,
    };
  },
});
</script>
