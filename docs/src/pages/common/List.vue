<template>
  <section class="p-4">
    <app-info
      title="List"
      component-source-path="/packages/common/src/components/list"
      docs-source-path="/docs/src/pages/common/List.vue"
    />

    <h3 class="mb-2">Default list</h3>
    <v-list>
      <v-list-item>Item #1</v-list-item>
      <v-list-item>Item #2</v-list-item>
      <v-list-item>Item #3</v-list-item>
    </v-list>

    <h3 class="mb-2">Button list</h3>
    <v-list>
      <v-list-item button @click="onClick(1)"> Item #1</v-list-item>
      <v-list-item button @click="onClick(2)"> Item #2</v-list-item>
      <v-list-item button @click="onClick(3)" item-class="list__item--special">
        Item #3 (with custom class)
      </v-list-item>
    </v-list>

    <h3 class="mb-2">Router link list</h3>
    <v-list>
      <v-list-item tag="router-link" to="../button"> Go to Button </v-list-item>
      <v-list-item tag="router-link" to="../dialog"> Go to Dialog </v-list-item>
      <v-list-item tag="router-link" to="../table"> Go to Table </v-list-item>
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

<style lang="scss">
@import '../../packages/common/sass/components';

.list__item {
  &--special {
    color: $primary;
  }
}
</style>
