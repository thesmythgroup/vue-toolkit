<template>
  <section class="snippet">
    <pre class="snippet__content">
      <code>
        <slot />
      </code>
    </pre>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-snippet',
});
</script>

<style lang="scss" scoped>
.snippet {
  &__title {
    margin-bottom: 0;
  }

  &__content {
    background-color: #f8f9fa;
    display: block;
    padding: 0.5rem;
  }
}
</style>
