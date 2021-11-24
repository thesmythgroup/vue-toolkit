<template>
  <div class="popover" ref="root">
    <slot name="trigger" v-bind="{ isOpen, toggle, open, close }" />

    <div class="popover__content" v-if="isOpen" id="popover">
      <slot v-bind="{ isOpen, toggle, open, close }" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
} from '@vue/composition-api';

export default defineComponent({
  name: 'v-popover',
  setup() {
    const isOpen = ref(false);
    const root = ref<HTMLElement | null>(null);

    const toggle = () => (
      (isOpen.value = !isOpen.value), nextTick(() => _handlePopoverPosition())
    );
    const open = () => (
      (isOpen.value = true), nextTick(() => _handlePopoverPosition())
    );
    const close = () => (isOpen.value = false);

    const _handlePopoverPosition = () => {
      if (!isOpen.value) {
        return;
      }
      const popover = document.getElementById('popover');
      const placeholderRect = root.value?.getBoundingClientRect();
      const dropdownRect = popover?.getBoundingClientRect();

      const dropdownRightX = dropdownRect.x + dropdownRect.width;
      const placeholderRightX = placeholderRect.x + placeholderRect.width;

      if (dropdownRect.x < 0) {
        popover.style.left = '0';
        popover.style.right = 'auto';
        popover.style.transform = `translateX(${-placeholderRect.x}px)`;
      } else if (dropdownRightX > window.innerWidth) {
        popover.style.left = 'auto';
        popover.style.right = '0';
        popover.style.transform = `translateX(${
          window.innerWidth - placeholderRightX
        }px)`;
      }
    };

    const handleBodyClick = (event: Event) => {
      const { target } = event;

      if (!isOpen.value || !target) {
        return;
      }

      if (
        !(root.value === target || root.value.contains(target as HTMLElement))
      ) {
        // outside click
        isOpen.value = false;
      }
    };

    onMounted(() => document.body.addEventListener('click', handleBodyClick));
    onUnmounted(() =>
      document.body.removeEventListener('click', handleBodyClick)
    );

    return {
      root,
      isOpen,
      toggle,
      open,
      close,
    };
  },
});
</script>
