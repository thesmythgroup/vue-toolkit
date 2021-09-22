<template>
  <section class="forgot-password">
    <!-- todo: i18n -->
    <h1 class="forgot-password__title">Forgot Password</h1>
    <form class="forgot-password__form" @submit="handleSubmit">
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
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

export default defineComponent({
  name: 'v-forgot-password',
  setup() {
    const router = useRouter();
    const username = ref('');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        await Auth.forgotPassword(username.value);

        router.push({
          path: '/forgot-password-submit',
          query: {
            username: username.value,
          },
        });
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      username,
    };
  },
});
</script>
