<template>
  <textarea class="textarea" :value="value" @input="onInput($event)"></textarea>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-textarea',
  props: {
    value: String,
  },
  methods: {
    onInput(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit('input', input.value);
    },
  },
});
</script>
