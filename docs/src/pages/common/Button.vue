<template>
  <section class="p-4">
    <app-info
      title="Button"
      component-source-path="/packages/common/src/components/button"
      docs-source-path="/docs/src/pages/common/Button.vue"
    />

    <app-options>
      <v-field>
        <v-checkbox v-model="disabled">Disabled</v-checkbox>
      </v-field>
      <v-field>
        <v-checkbox v-model="busy">Busy</v-checkbox>
      </v-field>
    </app-options>

    <v-button class="mr-1" @click="onClick()" :disabled="disabled" :busy="busy">
      Default Button
    </v-button>

    <v-button
      class="button--outline mr-1"
      @click="onClick()"
      :disabled="disabled"
      :busy="busy"
    >
      Outline Button
    </v-button>

    <v-button
      class="button--clear"
      @click="onClick()"
      :disabled="disabled"
      :busy="busy"
    >
      Clear Button
    </v-button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const busy = ref(false);
    const disabled = ref(false);
    const onClick = () => alert('Button clicked!');

    return {
      busy,
      disabled,
      onClick,
    };
  },
});
</script>
