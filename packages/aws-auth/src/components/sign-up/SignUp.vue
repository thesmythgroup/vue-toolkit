<template>
  <section class="sign-up">
    <!-- todo: i18n -->
    <h1 class="sign-up__title">Sign Up</h1>
    <form class="sign-up__form" @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>
      <p v-if="msg">{{ msg }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username"></v-input>
      </v-field>

      <v-field label="Password">
        <v-input type="password" name="password" v-model="password"></v-input>
      </v-field>

      <v-field label="Phone">
        <v-input type="tel" name="phone" v-model="phone"></v-input>
      </v-field>

      <!-- todo: route config -->
      <p>Have an account? <router-link to="/sign-in">Sign In</router-link></p>

      <v-button type="submit">Create Account</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import {
  AuthError,
  AuthConfig,
  AuthSignUpVerification,
} from '../../interfaces';

export default defineComponent({
  name: 'v-sign-up',
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      error: null as AuthError | null,
      msg: null as string | null,
    };
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        // todo: config
        const config = {} as AuthConfig;
        const res = await Auth.signUp({
          username: this.username,
          password: this.password,
        });

        if (res.userConfirmed) {
          this.$router.push({ path: '/sign-in' });
        } else if (res.codeDeliveryDetails) {
          switch (config.signUpVerification) {
            case AuthSignUpVerification.Code:
              this.$router.push({
                path: '/confirm-sign-up',
                query: { username: this.username },
              });
              break;
            case AuthSignUpVerification.Link:
              this.msg = `Please check ${res.codeDeliveryDetails.Destination} for vertifcation instructions.`;
              break;
            default:
              this.msg =
                'Please contact your system administrator to verify your account.';
              break;
          }
        } else {
          this.$router.push({ path: '/sign-in' });
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
