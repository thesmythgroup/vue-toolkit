<template>
  <app-info
    title="Chip"
    component-source-path="/packages/common/src/components/chip"
    docs-source-path="/docs/src/pages/common/Chip.vue"
    :props="[
      {
        name: 'show-remove',
        description: 'Whether the remove button is rendered.',
      },
    ]"
    :events="[
      { name: 'removed', description: 'Emitted when a chip is removed.' },
    ]"
  >
    <app-options>
      <v-field>
        <v-checkbox v-model="showRemove">Show Remove</v-checkbox>
      </v-field>
    </app-options>

    <v-chip :show-remove="showRemove" @removed="onRemove()"> Chip </v-chip>
  </app-info>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const showRemove = ref(false);
    const onRemove = () => alert('Chip removed!');

    return {
      showRemove,
      onRemove,
    };
  },
});
</script>
