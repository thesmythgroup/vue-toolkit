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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-list-item',
  inheritAttrs: false,
  props: {
    component: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    isClickable(): boolean {
      return (
        this.component === 'a' ||
        this.component === 'button' ||
        this.component === 'router-link'
      );
    },
  },
});
</script>
