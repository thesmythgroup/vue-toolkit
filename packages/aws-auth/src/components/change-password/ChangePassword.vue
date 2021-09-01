<template>
  <section>
    <!-- todo: i18n -->
    <h1>Change Password</h1>
    <form @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Old Password">
        <v-input
          type="password"
          name="oldPassword"
          v-model="oldPassword"
        ></v-input>
      </v-field>

      <v-field label="New Password">
        <v-input
          type="password"
          name="newPassword"
          v-model="newPassword"
        ></v-input>
      </v-field>

      <v-button type="submit">Submit</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default Vue.extend({
  name: 'v-change-password',
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      error: null as AuthError | null,
    };
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(user, this.oldPassword, this.newPassword);
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
