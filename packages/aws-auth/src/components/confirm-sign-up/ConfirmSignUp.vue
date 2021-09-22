<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign Up</h1>
    <form class="confirm-sign-up__form" @submit="handleSubmit">
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
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

export default defineComponent({
  name: 'v-confirm-sign-up',
  setup() {
    const router = useRouter();
    const username = ref('');
    const code = ref('');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        await Auth.confirmSignUp(username.value, code.value);
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
      username,
    };
  },
});
</script>
