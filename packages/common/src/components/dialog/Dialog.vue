<template>
  <div class="dialog" role="dialog">
    <!-- backdrop -->
    <div
      class="dialog__backdrop"
      v-if="showBackdrop"
      @click="handleBackdropClick()"
    ></div>

    <section
      class="dialog__inner"
      :class="size ? 'dialog__inner--' + size : ''"
      ref="modal"
    >
      <!-- close -->
      <button
        type="button"
        class="dialog__close"
        v-if="showClose"
        @click="handleClose()"
      >
        &times;
      </button>

      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
} from '@vue/composition-api';
import * as focusTrap from 'focus-trap';

export default defineComponent({
  name: 'v-dialog',
  props: {
    title: String,
    size: String,
    showBackdrop: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    backdropDismiss: {
      type: Boolean,
      default: true,
    },
    keyboardDismiss: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const modal = ref<HTMLElement>(null);
    const trap = ref<focusTrap.FocusTrap | null>(null);

    const dismiss = (reason: string) => {
      trap.value?.deactivate();
      emit('dismiss', reason);
    };

    const handleKeyup = (event: KeyboardEvent) => {
      if (props.keyboardDismiss && event.code === 'Escape') {
        dismiss('keyboard');
      }
    };

    const handleBackdropClick = () => {
      if (props.backdropDismiss) {
        dismiss('backdrop');
      }
    };

    const handleClose = () => {
      dismiss('close');
    };

    onMounted(() => {
      window.addEventListener('keyup', handleKeyup);
      trap.value = focusTrap.createFocusTrap(modal.value, {
        allowOutsideClick: true,
        escapeDeactivates: props.keyboardDismiss,
      });
      trap.value.activate();
    });

    onUnmounted(() => {
      window.removeEventListener('keyup', handleKeyup);
      trap.value?.deactivate();
    });

    return {
      modal,
      trap,
      handleKeyup,
      handleClose,
      handleBackdropClick,
    };
  },
});
</script>
