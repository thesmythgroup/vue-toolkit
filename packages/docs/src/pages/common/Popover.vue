<template>
  <section class="p-4">
    <h2 class="mt-0">Popover</h2>

    <v-popover>
      <template #trigger="{ toggle }">
        <v-button @click="toggle">Open Popover</v-button>
      </template>

      <p class="m-0 p-4">Popover content</p>
    </v-popover>
  </section>
</template>
