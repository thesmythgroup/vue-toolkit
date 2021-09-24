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
    <slot />
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
      setValue: (value: unknown) => void;
    }>('radio-group');

    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;

      // v-bind stores underlying (non-string) values as `_value`
      const value = '_value' in input ? (input as any)._value : input.value;
      group.setValue(value);
    };

    return {
      inputName: computed(() => props.name || group.name),
      isSelected: computed(() => group.innerValue.value == props.value),
      handleInput,
      handleBlur: group.handleBlur,
    };
  },
});
</script>
