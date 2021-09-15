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
    // todo: improve
    const control = this.$children.find((x) => x.$attrs.name != null);

    if (control?.$el) {
      control.$el.id = this.id;
    }
  },
});
</script>
