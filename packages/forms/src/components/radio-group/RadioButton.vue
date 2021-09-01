<template>
  <label class="radio-button">
    <input
      type="radio"
      class="radio-button__input"
      v-bind="$attrs"
      :name="innerName"
      :value="value"
      @change="onChange($event)"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

interface ParentComponent extends Vue {
  name: string;
  onChange(value: string | number): void;
}

export default Vue.extend({
  name: 'v-radio-button',
  inheritAttrs: false,
  props: {
    name: String,
    value: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    const parent = this.$parent as ParentComponent;

    return {
      innerName: this.name || parent.name,
    };
  },
  methods: {
    onChange() {
      const parent = this.$parent as ParentComponent;
      parent.onChange(this.value);
    },
  },
});
</script>
