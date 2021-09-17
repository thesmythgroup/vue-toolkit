<template>
  <li>
    <component
      class="list__item"
      v-bind="$attrs"
      :class="{ 'list__item--clickable': isClickable }"
      :is="is"
    >
      <slot></slot>
    </component>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-list-item',
  inheritAttrs: false,
  props: {
    is: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    isClickable(): boolean {
      return (
        this.is === 'a' || this.is === 'button' || this.is === 'router-link'
      );
    },
  },
});
</script>
