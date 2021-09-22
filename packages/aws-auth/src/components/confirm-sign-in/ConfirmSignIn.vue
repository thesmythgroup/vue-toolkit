<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign In</h1>
    <form class="confirm-sign-up__form" @submit="handleSubmit">
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
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-confirm-sign-in',
  props: {
    user: Object as () => CognitoUser,
  },
  setup(props) {
    const code = ref('');
    const remember = ref(false);
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        await Auth.confirmSignIn(props.user, code.value);

        if (remember.value) {
          await Auth.rememberDevice();
        }

        // todo: go to root?
      } catch (error) {
        error.value = error;
      }
    };

    onMounted(() => {
      if (!props.user) {
        // todo: back to sign in with an error message
      }
    });

    return {
      code,
      error,
      handleSubmit,
      remember,
    };
  },
});
</script>
