<template>
  <!-- todo: message that aws is not configured? -->
  <router-view @set-user="onSetUser($event)" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CognitoUser } from '@aws-amplify/auth';

export default defineComponent({
  name: 'v-auth-root',
  data() {
    return {
      user: null as CognitoUser | null,
    };
  },
  methods: {
    onSetUser(user: CognitoUser) {
      this.user = user;
    },
  },
});
</script>
