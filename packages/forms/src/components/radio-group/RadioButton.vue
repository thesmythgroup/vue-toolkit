<template>
  <label class="radio-group__button">
    <input
      type="radio"
      class="radio-group__input"
      v-bind="$attrs"
      :name="inputName"
      :value="value"
      :checked="isSelected"
      @change="handleChange"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from 'vue-demi';

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
      setValue: (value: unknown) => void;
      name: string;
      innerValue: Ref<unknown>;
    }>('radio-group');

    const handleChange = () => {
      group.setValue(props.value);
    };

    return {
      inputName: computed(() => props.name || group.name),
      isSelected: computed(() => group.innerValue.value == props.value),
      handleChange,
    };
  },
});
</script>
