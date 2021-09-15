<template>
  <div class="popover">
    <slot name="trigger" :toggle="toggle" />

    <div class="popover__content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'v-popover',
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    document.body.addEventListener('click', this.onBodyClick);
  },
  destroyed() {
    document.body.removeEventListener('click', this.onBodyClick);
  },
  methods: {
    onBodyClick(event: Event) {
      const { target } = event;

      if (!this.isOpen || !target) {
        return;
      }

      if (!(this.$el === target || this.$el.contains(target as HTMLElement))) {
        // outside click
        this.isOpen = false;
      }
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>
