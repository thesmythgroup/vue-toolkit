<template>
  <div class="field">
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
    </label>
    <div class="field__control">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-field',
  props: {
    label: String,
  },
  data() {
    return {
      id: getUniqueId('control-'),
    };
  },
  mounted() {
    // todo: link lable/control with id
  },
});
</script>
