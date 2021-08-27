<template>
  <!-- todo: message that aws is not configured? -->
  <router-view @set-user="onSetUser($event)" :user="user" />
</template>

<script lang="ts">
import Vue from 'vue';
import { CognitoUser } from '@aws-amplify/auth';

export default Vue.extend({
  name: 'v-auth-root',
  data: () => ({
    user: null as CognitoUser | null,
  }),
  methods: {
    onSetUser(user: CognitoUser) {
      this.user = user;
    },
  },
});
</script>
