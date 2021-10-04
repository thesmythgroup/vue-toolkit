<template>
  <section class="info">
    <header class="info__header">
      <h2 class="info__title">{{ title }}</h2>

      <!-- links -->
      <ul class="info__list">
        <li class="info__item">
          <a
            :href="componentSourceUrl"
            title="View component source"
            target="_blank"
            class="info__link"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
        </li>
        <li class="info__item">
          <a
            :href="docsSourceUrl"
            title="View docs source"
            target="_blank"
            class="info__link"
          >
            <font-awesome-icon icon="file-alt" size="lg" />
          </a>
        </li>
      </ul>
    </header>

    <!-- example -->
    <div class="info__content">
      <slot />
    </div>

    <!-- props -->
    <section v-if="props">
      <h2 class="info__subtitle">Props</h2>
      <v-table :data="props">
        <v-column label="Name" v-slot="{ row }">
          <code class="info__code">{{ row.name }}</code>
        </v-column>
        <v-column label="Description" v-slot="{ row }">
          <div v-html="row.description"></div>
        </v-column>
        <v-column label="Type" v-slot="{ row }">
          <code class="info__code">{{ row.type }}</code>
        </v-column>
      </v-table>
    </section>

    <!-- events -->
    <section v-if="events">
      <h2 class="info__subtitle">Events</h2>
      <v-table :data="events">
        <v-column label="Name" v-slot="{ row }">
          <code class="info__code">{{ row.name }}</code>
        </v-column>
        <v-column label="Description" v-slot="{ row }">
          {{ row.description }}
        </v-column>
      </v-table>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'app-info',
  props: {
    title: {
      type: String,
      required: true,
    },
    componentSourcePath: {
      type: String,
      required: true,
    },
    docsSourcePath: {
      type: String,
      required: true,
    },
    props: {
      type: Array,
    },
    events: {
      type: Array,
    },
  },
  setup(props) {
    const repo = import.meta.env.VITE_SOURCE_ROOT;

    const componentSourceUrl = ref(repo + props.componentSourcePath);
    const docsSourceUrl = ref(repo + props.docsSourcePath);

    return {
      componentSourceUrl,
      docsSourceUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../../packages/common/sass/components/variables';

.info {
  padding: 1rem;

  &__header {
    display: flex;
    margin-bottom: 1rem;
  }

  &__title {
    flex: 1 0;
    margin: 0;
  }

  &__list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    color: $gray-dark;
    display: block;
    padding: 0.5rem;
    transition: 0.3s opacity;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }

  &__content {
    margin-bottom: 4rem;
  }

  &__subtitle {
    margin-bottom: 0.5rem;
  }

  &__code {
    background-color: #f8f9fa;
    border-radius: $border-radius;
    padding: 0.25em 0.5rem;
  }
}
</style>
