<template>
  <section class="forgot-password-submit">
    <!-- todo: i18n -->
    <h1 class="forgot-password-submit__title">Forgot Password Submit</h1>
    <form class="forgot-password-submit__form" @submit="handleSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" v-model="username" disabled></v-input>
      </v-field>

      <v-field label="Code">
        <v-input name="code" v-model="code"></v-input>
      </v-field>

      <v-field label="New Password">
        <v-input
          type="password"
          name="password"
          v-model="password"
          autocomplete="off"
        ></v-input>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Submit</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { Auth } from '@aws-amplify/auth';
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useRouter } from '../../composition';
import { AuthError } from '../../interfaces';

export default defineComponent({
  name: 'v-forgot-password-submit',
  setup() {
    const router = useRouter();
    const username = ref('');
    const code = ref('');
    const password = ref('');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        await Auth.forgotPasswordSubmit(
          username.value,
          code.value,
          password.value
        );

        router.push({ path: '/sign-in' });
      } catch (error) {
        error.value = error;
      }
    };

    onMounted(() => {
      username.value = router.currentRoute.query.username as string;
    });

    return {
      code,
      error,
      handleSubmit,
      password,
      username,
    };
  },
});
</script>
