<template>
  <li>
    <component
      class="list__item"
      v-bind="$attrs"
      :class="{ 'list__item--clickable': isClickable }"
      :is="component"
    >
      <slot></slot>
    </component>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'v-list-item',
  inheritAttrs: false,
  props: {
    component: {
      type: String,
      default: 'div',
    },
  },
  setup(props) {
    const isClickable = computed(
      () =>
        props.component === 'a' ||
        props.component === 'button' ||
        props.component === 'router-link'
    );

    return { isClickable };
  },
});
</script>
