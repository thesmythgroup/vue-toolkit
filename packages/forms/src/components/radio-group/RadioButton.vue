<template>
  <label class="radio-button">
    <input
      type="radio"
      class="radio-button__input"
      v-bind="$attrs"
      :value="value"
      @change="onChange($event)"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

interface ParentComponent extends Vue {
  onChange(value: string | number): void;
}

export default Vue.extend({
  name: 'v-radio-button',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    onChange() {
      const parent = this.$parent as ParentComponent;
      parent.onChange(this.value);
    },
  },
});
</script>
