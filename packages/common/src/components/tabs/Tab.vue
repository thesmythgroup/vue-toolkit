<template>
  <section class="tabs__content" v-if="isActive">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent, ComponentInstance } from '@vue/composition-api';

interface ParentComponent extends ComponentInstance {
  tabs: ComponentInstance[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineComponent({
  name: 'v-tab',
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    const parent = this.$parent as ParentComponent;
    parent.tabs.push(this as any);

    if (parent.tabs.length === 1) {
      this.isActive = true;
    }
  },
  destroyed() {
    const parent = this.$parent as ParentComponent;
    const index = parent.tabs.findIndex((x) => x === this);

    if (index === -1) {
      parent.tabs.splice(index, 1);
    }
  },
});
</script>
