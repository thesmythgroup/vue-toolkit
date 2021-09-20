<template>
  <section class="p-4">
    <h2 class="mt-0">List</h2>

    <h3 class="mb-2">Default list</h3>
    <v-list>
      <v-list-item>Item #1</v-list-item>
      <v-list-item>Item #2</v-list-item>
      <v-list-item>Item #3</v-list-item>
    </v-list>

    <h3 class="mb-2">Button list</h3>
    <v-list>
      <v-list-item component="button" @click="onClick(1)"> Item #1</v-list-item>
      <v-list-item component="button" @click="onClick(2)"> Item #2</v-list-item>
      <v-list-item component="button" @click="onClick(3)"> Item #3</v-list-item>
    </v-list>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const onClick = (num: number) => alert(`Item #${num} clicked!`);

    return { onClick };
  },
});
</script>
