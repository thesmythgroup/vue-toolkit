<template>
  <section class="accordion">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

interface ChildComponent {
  isOpen: boolean;
}

export default Vue.extend({
  name: 'v-accordion',
  props: {
    allowMultiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [] as ChildComponent[],
    };
  },
  methods: {
    setOpen(item: ChildComponent) {
      if (this.allowMultiple) {
        return;
      }

      this.items.filter((x) => x !== item).forEach((x) => (x.isOpen = false));
    },
  },
  watch: {
    allowMultiple(newValue: boolean) {
      if (!newValue) {
        this.items.forEach((x) => (x.isOpen = false));
      }
    },
  },
});
</script>
