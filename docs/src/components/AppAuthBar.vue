<template>
  <section class="auth-info">
    <!-- authenticated -->
    <div v-if="isAuthenticated" class="flex items-center justify-between">
      <div>
        <p class="m-0 font-bold">{{ user.attributes.email }}</p>
        <p class="m-0">{{ user.username }}</p>
      </div>

      <v-button class="button--outline" @click="signOut"> Sign out </v-button>
    </div>

    <!-- unauthenticated -->
    <p v-if="!isAuthenticated" class="m-0">🔒 Not signed in</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api';
import { Auth, CognitoUser } from '@aws-amplify/auth';

export default defineComponent({
  name: 'app-auth-bar',
  setup() {
    const user = ref<CognitoUser | null>(null);
    const isAuthenticated = computed(() => !!user.value);
    const signOut = async () => {
      await Auth.signOut();
      user.value = null;
    };

    onMounted(async () => {
      try {
        user.value = await Auth.currentAuthenticatedUser();
        console.log(user.value);
      } catch (error) {
        // not authenticated
        user.value = null;
      }
    });

    return {
      user,
      isAuthenticated,
      signOut,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../../packages/common/sass/components/variables';

.auth-info {
  border-bottom: 1px solid $gray-light;
  margin-bottom: 1.5rem;
  padding: 1rem;
}
</style>
