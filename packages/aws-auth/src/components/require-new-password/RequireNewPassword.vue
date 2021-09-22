<template>
  <section class="require-new-password">
    <!-- todo: i18n -->
    <h1 class="require-new-password__title">New Password Required</h1>
    <form class="require-new-password__form" @submit="handleSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="New Password">
        <v-input
          type="password"
          name="password"
          v-model="password"
          autocomplete="off"
        ></v-input>
      </v-field>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Change</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-require-new-password',
  props: {
    user: Object as () => CognitoUser,
  },
  setup(props) {
    const password = ref('');
    const error = ref<AuthError | null>(null);

    const getUsername = () => {
      return new Promise<string>((resolve, reject) => {
        props.user?.getUserData((error, data) =>
          data ? resolve(data.Username) : reject(error)
        );
      });
    };

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        await Auth.completeNewPassword(props.user, password.value);

        const username = await getUsername();
        await Auth.signIn(username, password.value);
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      password,
    };
  },
});
</script>
