<template>
  <section class="sign-in">
    <!-- todo: i18n -->
    <h1 class="sign-in__title">Sign In</h1>
    <form class="sign-in__form" @submit="handleSubmit">
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
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

export default defineComponent({
  name: 'v-sign-in',
  setup(props, { emit }) {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        const user = await Auth.signIn(username.value, password.value);
        emit('set-user', user);

        if (!user.challengeName) {
          // todo: go to root?
          return;
        }

        switch (user.challengeName) {
          case 'NEW_PASSWORD_REQUIRED':
            router.push({ path: '/require-new-password' });
            break;
          case 'SMS_MFA':
          case 'SOFTWARE_TOKEN_MFA':
            router.push({ path: '/confirm-sign-in' });
            break;
          case 'MFA_SETUP':
            // todo
            break;
          default:
            break;
        }
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      password,
      username,
    };
  },
});
</script>
