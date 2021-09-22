<template>
  <!-- todo: message that aws is not configured? -->
  <router-view @set-user="handleSetUser($event)" :user="user" />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { CognitoUser } from '@aws-amplify/auth';

export default defineComponent({
  name: 'v-auth-root',
  setup() {
    const user = ref<CognitoUser | null>();
    const handleSetUser = (value: CognitoUser) => {
      user.value = value;
    };

    return {
      user,
      handleSetUser,
    };
  },
});
</script>
