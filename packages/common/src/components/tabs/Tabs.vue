<template>
  <section class="tabs">
    <ul class="tabs__header">
      <li v-for="(tab, index) of tabs" :key="index" class="tabs__item">
        <button
          type="button"
          class="tabs__button"
          :class="{
            'tabs__button--active': tab.isActive,
            'tabs__button--disabled': tab.disabled,
          }"
          :disabled="tab.disabled"
          @click="setActive(tab)"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

interface ChildComponent {
  isActive: boolean;
}

export default defineComponent({
  name: 'v-tabs',
  data() {
    return {
      tabs: [] as ChildComponent[],
    };
  },
  methods: {
    setActive(tab: ChildComponent) {
      this.tabs.forEach((x) => {
        x.isActive = x === tab;
      });
    },
  },
});
</script>
