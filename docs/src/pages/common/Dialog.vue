<template>
  <app-info
    title="Dialog"
    component-source-path="/packages/common/src/components/dialog"
    docs-source-path="/docs/src/pages/common/Dialog.vue"
    :props="[
      {
        name: 'size',
        description: 'Apply size class modifier.',
        type: 'string',
      },
      {
        name: 'show-backdrop',
        description: 'Whether the dialog has a backdrop.',
        type: 'boolean',
      },
      {
        name: 'show-close',
        description: 'Whether the dialog has a close button.',
        type: 'boolean',
      },
      {
        name: 'backdrop-dismiss',
        description: 'Whether the dialog is dismissed on backdrop click.',
        type: 'boolean',
      },
      {
        name: 'keyboard-dismiss',
        description: 'Whether the dialog is dismisses on the escape keypress',
        type: 'boolean',
      },
    ]"
    :events="[
      { name: 'dismiss', description: 'Emitted when a chip is dismissed.' },
    ]"
  >
    <app-options>
      <v-field>
        <v-checkbox v-model="showBackdrop">Show Backdrop</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="showClose">Show Close</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="backdropDismiss">Backdrop Dismiss</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="keyboardDismiss">Keyboard Dismiss</v-checkbox>
      </v-field>
      <v-field label="Size">
        <v-select v-model="size">
          <v-option value="">Default</v-option>
          <v-option value="small">Small</v-option>
          <v-option value="large">Large</v-option>
        </v-select>
      </v-field>
    </app-options>

    <v-button type="button" @click="onOpen()">Open Dialog</v-button>

    <v-dialog
      v-if="isOpen"
      @dismiss="onDismiss()"
      :size="size"
      :show-backdrop="showBackdrop"
      :show-close="showClose"
      :backdrop-dismiss="backdropDismiss"
      :keyboard-dismiss="keyboardDismiss"
    >
      <v-dialog-header>Example Dialog</v-dialog-header>
      <v-dialog-content>
        <p>Content for dialog body.</p>
      </v-dialog-content>
      <v-dialog-footer>
        <v-button type="button" @click="onDismiss()">Done</v-button>
      </v-dialog-footer>
    </v-dialog>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const showBackdrop = ref(true);
    const showClose = ref(true);
    const backdropDismiss = ref(true);
    const keyboardDismiss = ref(true);
    const size = ref('');
    const onOpen = () => (isOpen.value = true);
    const onDismiss = () => (isOpen.value = false);

    return {
      isOpen,
      showBackdrop,
      showClose,
      backdropDismiss,
      keyboardDismiss,
      size,
      onOpen,
      onDismiss,
    };
  },
});
</script>
