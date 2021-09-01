<template>
  <section>
    <!-- todo: i18n -->
    <h1>New Password Required</h1>
    <form @submit="onSubmit">
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
import Vue from 'vue';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default Vue.extend({
  name: 'v-require-new-password',
  props: {
    user: Object as () => CognitoUser,
  },
  data() {
    return {
      password: '',
      error: null as AuthError | null,
    };
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        await Auth.completeNewPassword(this.user, this.password);

        const username = await this.getUsername();
        await Auth.signIn(username, this.password);
      } catch (error) {
        this.error = error;
      }
    },
    getUsername() {
      return new Promise<string>((resolve, reject) => {
        this.user?.getUserData((error, data) =>
          data ? resolve(data.Username) : reject(error)
        );
      });
    },
  },
});
</script>
