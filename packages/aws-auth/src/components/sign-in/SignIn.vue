<template>
  <section class="sign-in">
    <!-- todo: i18n -->
    <h1 class="sign-in__title">Sign In</h1>
    <form class="sign-in__form" @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username"></v-input>
      </v-field>

      <v-field label="Password">
        <v-input type="password" name="password" v-model="password"></v-input>
      </v-field>

      <!-- todo: route config -->
      <p>
        Forgot your password?
        <router-link to="/forgot-password">Reset password</router-link>
      </p>
      <p>No account <router-link to="/sign-up">Create account</router-link></p>

      <v-button type="submit">Sign In</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-sign-in',
  data() {
    return {
      username: '',
      password: '',
      error: null as AuthError | null,
    };
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        const user = await Auth.signIn(this.username, this.password);
        this.$emit('set-user', user);

        if (!user.challengeName) {
          // todo: go to root?
          return;
        }

        switch (user.challengeName) {
          case 'NEW_PASSWORD_REQUIRED':
            this.$router.push({ path: '/require-new-password' });
            break;
          case 'SMS_MFA':
          case 'SOFTWARE_TOKEN_MFA':
            this.$router.push({ path: '/confirm-sign-in' });
            break;
          case 'MFA_SETUP':
            // todo
            break;
          default:
            break;
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
