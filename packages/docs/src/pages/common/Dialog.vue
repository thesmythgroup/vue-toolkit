<template>
  <section class="p-4">
    <h2 class="mt-0">Dialog</h2>

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
    </app-options>

    <v-button type="button" @click="onOpen()">Open Dialog</v-button>

    <v-dialog
      v-if="isOpen"
      @dimissed="onDismiss()"
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
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isOpen: false,
      showBackdrop: true,
      showClose: true,
      backdropDismiss: true,
      keyboardDismiss: true,
    };
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onDismiss() {
      this.isOpen = false;
    },
  },
});
</script>
