<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign In</h1>
    <form class="confirm-sign-up__form" @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Confirmation code">
        <v-input name="code" v-model="code"></v-input>
      </v-field>

      <v-field>
        <v-checkbox name="remember" v-model="remember">
          Remember this device?
        </v-checkbox>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Confirm</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-confirm-sign-in',
  props: {
    user: Object as () => CognitoUser,
  },
  data() {
    return {
      code: '',
      remember: false,
      error: null as AuthError | null,
    };
  },
  mounted() {
    if (!this.user) {
      // todo: back to sign in with an error message
    }
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        await Auth.confirmSignIn(this.user, this.code);

        if (this.remember) {
          await Auth.rememberDevice();
        }

        // todo: go to root?
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
