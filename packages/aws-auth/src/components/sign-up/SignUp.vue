<template>
  <section class="sign-up">
    <!-- todo: i18n -->
    <h1 class="sign-up__title">Sign Up</h1>
    <form class="sign-up__form" @submit="handleSubmit">
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
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import {
  AuthError,
  AuthConfig,
  AuthSignUpVerification,
} from '../../interfaces';
import { useRouter } from '../../composition';

export default defineComponent({
  name: 'v-sign-up',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const phone = ref('');
    const error = ref<AuthError | null>(null);
    const msg = ref<string | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        // todo: config
        const config = {} as AuthConfig;
        const res = await Auth.signUp({
          username: username.value,
          password: password.value,
        });

        if (res.userConfirmed) {
          router.push({ path: '/sign-in' });
        } else if (res.codeDeliveryDetails) {
          switch (config.signUpVerification) {
            case AuthSignUpVerification.Code:
              router.push({
                path: '/confirm-sign-up',
                query: { username: username.value },
              });
              break;
            case AuthSignUpVerification.Link:
              msg.value = `Please check ${res.codeDeliveryDetails.Destination} for vertifcation instructions.`;
              break;
            default:
              msg.value =
                'Please contact your system administrator to verify your account.';
              break;
          }
        } else {
          router.push({ path: '/sign-in' });
        }
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      msg,
      password,
      phone,
      username,
    };
  },
});
</script>
