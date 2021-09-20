<template>
  <section class="p-4">
    <h2 class="mt-0">Chip</h2>

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
