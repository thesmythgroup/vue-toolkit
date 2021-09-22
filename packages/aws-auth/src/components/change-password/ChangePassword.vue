<template>
  <section class="change-password">
    <!-- todo: i18n -->
    <h1 class="change-password__title">Change Password</h1>
    <form class="change-password__form" @submit="handleSubmit">
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
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-change-password',
  setup() {
    const oldPassword = ref('');
    const newPassword = ref('');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(user, oldPassword.value, newPassword.value);
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      newPassword,
      oldPassword,
    };
  },
});
</script>
