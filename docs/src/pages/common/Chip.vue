<template>
  <section class="p-4">
    <app-info
      title="Chip"
      component-source-path="/packages/common/src/components/chip"
      docs-source-path="/docs/src/pages/common/Chip.vue"
    />

    <app-options>
      <v-field>
        <v-checkbox v-model="showRemove">Show Remove</v-checkbox>
      </v-field>
    </app-options>

    <v-chip :showRemove="showRemove" @removed="onRemove()"> Chip </v-chip>
  </section>
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
