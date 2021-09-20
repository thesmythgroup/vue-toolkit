<template>
  <div class="popover" ref="root">
    <slot name="trigger" v-bind="{ isOpen, toggle, open, close }" />

    <div class="popover__content" v-if="isOpen">
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

export default defineComponent({
  name: 'v-popover',
  setup() {
    const isOpen = ref(false);
    const root = ref<HTMLElement | null>(null);

    const toggle = () => (isOpen.value = !isOpen.value);
    const open = () => (isOpen.value = true);
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
