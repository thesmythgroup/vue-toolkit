<template>
  <li>
    <component
      class="list__item"
      v-bind="$attrs"
      v-on="$listeners"
      :class="[{ 'list__item--clickable': isClickable }, itemClass]"
      :is="compTag"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'v-list-item',
  inheritAttrs: false,
  props: {
    button: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
    },
    tag: {
      type: String,
    },
    // not needed in vue3
    // https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html
    itemClass: {
      type: [String, Object],
    },
  },
  setup(props) {
    const compTag = computed(() => {
      if (props.tag) {
        return props.tag;
      } else if (props.href) {
        return 'a';
      } else if (props.button) {
        return 'button';
      } else {
        return 'div';
      }
    });

    const isClickable = computed(
      () =>
        compTag.value === 'a' ||
        compTag.value === 'button' ||
        compTag.value === 'router-link'
    );

    return { isClickable, compTag };
  },
});
</script>
