<template>
  <section class="complete-forgot-password">
    <!-- todo: i18n -->
    <h1 class="complete-forgot-password__title">Complete Forgot Password</h1>
    <form class="complete-forgot-password__form" @submit="onSubmit">
      <!-- todo: i18n -->
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username" disabled></v-input>
      </v-field>

      <v-field label="Code">
        <v-input name="code" v-model="code"></v-input>
      </v-field>

      <v-field label="New Password">
        <v-input type="password" name="password" v-model="password"></v-input>
      </v-field>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Send Code</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-complete-forgot-password',
  data() {
    return {
      username: '',
      code: '',
      password: '',
      error: null as AuthError | null,
    };
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        await Auth.forgotPasswordSubmit(
          this.username,
          this.code,
          this.password
        );

        this.$router.push({ path: '/sign-in' });
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
