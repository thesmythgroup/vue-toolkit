<template>
  <div class="accordion-item">
    <button
      type="button"
      class="accordion-item__button"
      :disabled="disabled"
      @click="onToggle()"
    >
      <h3 class="accordion-item__title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <svg
        class="accordion-item__icon"
        :class="{ 'accordion-item__icon--up': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>

    <section v-if="isOpen" class="accordion-item__content">
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface ParentComponent extends Vue {
  items: Vue[];
  setOpen(child: Vue): void;
}

export default Vue.extend({
  name: 'v-accordion-item',
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  created() {
    const parent = this.$parent as ParentComponent;
    parent.items.push(this);
  },
  destroyed() {
    const parent = this.$parent as ParentComponent;
    const index = parent.items.findIndex((x) => x === this);

    if (index === -1) {
      parent.items.splice(index, 1);
    }
  },
  methods: {
    onToggle() {
      const parent = this.$parent as ParentComponent;

      this.isOpen = !this.isOpen;
      parent.setOpen(this);
    },
  },
});
</script>
