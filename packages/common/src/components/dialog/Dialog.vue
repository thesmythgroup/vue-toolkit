<template>
  <div class="dialog" role="dialog">
    <!-- backdrop -->
    <div
      class="dialog__backdrop"
      v-if="showBackdrop"
      @click="onBackdrop()"
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
        @click="onClose()"
      >
        &times;
      </button>

      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
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
  data() {
    return {
      trap: null as focusTrap.FocusTrap | null,
    };
  },
  created() {
    window.addEventListener('keyup', this.onKeyup);
  },
  mounted() {
    this.trap = focusTrap.createFocusTrap(this.$refs.modal as HTMLElement, {
      allowOutsideClick: true,
      escapeDeactivates: this.keyboardDismiss,
    });
    this.trap.activate();
  },
  destroyed() {
    window.removeEventListener('keyup', this.onKeyup);
    this.trap?.deactivate();
  },
  methods: {
    dismiss(reason: string) {
      this.trap?.deactivate();
      this.$emit('dismiss', reason);
    },
    onKeyup(e: KeyboardEvent) {
      if (this.keyboardDismiss && e.code === 'Escape') {
        this.dismiss('keyboard');
      }
    },
    onBackdrop() {
      if (this.backdropDismiss) {
        this.dismiss('backdrop');
      }
    },
    onClose() {
      this.dismiss('close');
    },
  },
});
</script>
