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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'app-snippet',
});
</script>

<style lang="scss" scoped>
@import '../../../packages/common/sass/components/variables';

.snippet {
  &__title {
    margin-bottom: 0;
  }

  &__content {
    background-color: #f8f9fa;
    border-radius: $border-radius;
    display: block;
    padding: 0.5rem;
  }
}
</style>
