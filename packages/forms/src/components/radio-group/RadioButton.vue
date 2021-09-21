<template>
  <label class="radio-group__button">
    <input
      type="radio"
      class="radio-group__input"
      v-bind="$attrs"
      :name="inputName"
      :value="value"
      :checked="isSelected"
      @change="handleInput"
      @blur="handleBlur"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from '@vue/composition-api';

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
  setup(props) {
    const group = inject<{
      name: string;
      innerValue: Ref<unknown>;
      handleBlur: () => void;
      handleInput: (event: Event) => void;
    }>('radio-group');

    return {
      inputName: computed(() => props.name || group.name),
      isSelected: computed(() => group.innerValue.value == props.value),
      handleInput: group.handleInput,
      handleBlur: group.handleBlur,
    };
  },
});
</script>
