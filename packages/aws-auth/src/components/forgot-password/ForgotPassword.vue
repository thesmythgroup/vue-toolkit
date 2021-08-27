<template>
  <section>
    <!-- todo: i18n -->
    <h1>Forgot Password</h1>
    <form @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username"></v-input>
      </v-field>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Send Code</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default Vue.extend({
  name: 'v-forgot-password',
  data: () => ({
    username: '',
    error: null as AuthError | null,
  }),
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        await Auth.forgotPassword(this.username);

        this.$router.push({
          path: '/forgot-password-submit',
          query: {
            username: this.username,
          },
        });
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
