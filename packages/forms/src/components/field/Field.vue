<template>
  <div class="field">
    <slot v-if="required" name="required-indicator">*</slot>
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
    </label>
    <div class="field__control">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue-demi';

import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-field',
  props: {
    label: String,
    required: Boolean,
  },
  setup() {
    const id = ref(getUniqueId('control-'));
    provide('field-id', id.value);

    return {
      id,
    };
  },
});
</script>
