<template>
  <div class="popover" ref="root">
    <div ref="trigger">
      <slot name="trigger" v-bind="{ isOpen, toggle, open, close }" />
    </div>

    <div class="popover__content" v-show="isOpen" ref="content">
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
} from '@vue/composition-api';
import { createPopper } from '@popperjs/core';

export default defineComponent({
  name: 'v-popover',
  setup() {
    const isOpen = ref(false);
    const root = ref<HTMLElement | null>(null);
    let popoverRef = ref(null);
    const trigger = ref<HTMLElement | null>(null);
    const content = ref<HTMLElement | null>(null);

    const toggle = () => {
      isOpen.value = !isOpen.value;
      popoverRef.update();
    };
    const open = () => {
      isOpen.value = true;
      popoverRef.update();
    };
    const close = () => (isOpen.value = false);

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

    onMounted(() => {
      document.body.addEventListener('click', handleBodyClick);
      popoverRef = createPopper(trigger.value, content.value, {
        placement: 'bottom-start',
      });
    });

    onUnmounted(() =>
      document.body.removeEventListener('click', handleBodyClick)
    );

    return {
      root,
      isOpen,
      trigger,
      content,
      toggle,
      open,
      close,
    };
  },
});
</script>
