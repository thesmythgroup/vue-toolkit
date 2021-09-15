<template>
  <label class="radio-group__button">
    <input
      type="radio"
      class="radio-group__input"
      v-bind="$attrs"
      :name="innerName"
      :value="value"
      :checked="isSelected"
      @change="onChange($event)"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, ComponentInstance } from 'vue-demi';

interface ParentComponent extends ComponentInstance {
  name: string;
  innerValue: string | number;
  onChange(value: string | number): void;
}

export default defineComponent({
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
  computed: {
    isSelected(): boolean {
      const parent = this.$parent as ParentComponent;
      return this.value === parent.innerValue;
    },
  },
});
</script>
