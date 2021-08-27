<template>
  <div>
    <div v-if="isSignedIn">
      <p>You are signed in.</p>
      <button type="button" @click="onSignOut">Sign Out</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from '@aws-amplify/auth';

export default Vue.extend({
  data: () => ({
    isSignedIn: false,
  }),
  mounted() {
    this.setStatus();
  },
  methods: {
    async onSignOut(event: Event) {
      event.preventDefault();

      await Auth.signOut();
    },
    async setStatus() {
      this.isSignedIn = await Auth.currentAuthenticatedUser();
    },
  },
});
</script>
