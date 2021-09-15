<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign Up</h1>
    <form class="confirm-sign-up__form" @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username" disabled></v-input>
      </v-field>

      <v-field label="Code">
        <v-input name="code" v-model="code"></v-input>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <v-button type="submit">Confirm</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-confirm-sign-up',
  data() {
    return {
      username: '',
      code: '',
      error: null as AuthError | null,
    };
  },
  mounted() {
    this.username = this.$route.query.username as string;
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        await Auth.confirmSignUp(this.username, this.code);
        this.$router.push({ path: '/sign-in' });
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
