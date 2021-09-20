<template>
  <section class="p-4">
    <h2 class="mt-0">Popover</h2>

    <v-popover>
      <template #trigger="{ toggle }">
        <v-button @click="toggle">Open Popover</v-button>
      </template>

      <template #default="{ close }">
        <div class="p-4">
          <p class="m-0 mb-4">Popover content</p>
          <v-button @click="close">Manually close</v-button>
        </div>
      </template>
    </v-popover>
  </section>
</template>
