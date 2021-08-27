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
import Vue from 'vue';
import { getUniqueId } from './unique-id';

export default Vue.extend({
  name: 'v-field',
  props: {
    label: String,
  },
  data: () => ({
    id: getUniqueId(),
  }),
  mounted() {
    // todo: improve
    const control = this.$children.find((x) => x.$attrs.name != null);

    if (control?.$el) {
      control.$el.id = this.id;
    }
  },
});
</script>
