<template>
  <section class="auth-info">
    <!-- authenticated -->
    <div v-if="isAuthenticated" class="flex items-center justify-between">
      <p class="m-0">{{ user.username }}</p>

      <v-button class="button--outline" @click="onSignOut"> Sign out </v-button>
    </div>

    <!-- unauthenticated -->
    <p v-if="!isAuthenticated" class="m-0">🔒 Not signed in</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth, CognitoUser } from '@aws-amplify/auth';

export default Vue.extend({
  name: 'app-auth-bar',
  data() {
    return {
      user: null as CognitoUser | null,
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    async loadUser() {
      try {
        this.user = await Auth.currentAuthenticatedUser();
      } catch (error) {
        // not authenticated
        this.user = null;
      }
    },
    async onSignOut() {
      await Auth.signOut();
    },
  },
  computed: {
    isAuthenticated(): boolean {
      return !!this.user;
    },
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
