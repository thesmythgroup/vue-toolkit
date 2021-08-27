<template>
  <div class="dialog" role="dialog">
    <!-- backdrop -->
    <div
      class="dialog__backdrop"
      v-if="showBackdrop"
      @click="onBackdrop()"
    ></div>

    <section class="dialog__inner" ref="modal">
      <!-- close -->
      <button
        type="button"
        class="dialog__close"
        v-if="showClose"
        @click="onClose()"
      >
        &times;
      </button>

      <!-- header -->
      <slot name="v-dialog-header" v-if="showHeader"> </slot>

      <!-- content -->
      <slot></slot>

      <!-- footer -->
      <slot name="v-dialog-footer" v-if="showFooter"></slot>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as focusTrap from 'focus-trap';

export default Vue.extend({
  name: 'v-dialog',
  props: {
    title: String,
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
  data: () => ({
    showHeader: false,
    showFooter: false,
    trap: null as focusTrap.FocusTrap | null,
  }),
  created() {
    window.addEventListener('keyup', this.onKeyup);
  },
  mounted() {
    this.showHeader = !!this.$slots.header;
    this.showFooter = !!this.$slots.footer;

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
      this.$emit('dimissed', reason);
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
