<template>
  <section class="p-4">
    <app-info
      title="Popover"
      component-source-path="/packages/common/src/components/popover"
      docs-source-path="/docs/src/pages/common/Popover.vue"
    />

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
