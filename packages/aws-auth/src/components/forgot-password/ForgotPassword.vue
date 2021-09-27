<template>
  <section class="forgot-password">
    <!-- todo: i18n -->
    <h1 class="forgot-password__title">Forgot Password</h1>
    <v-form
      class="forgot-password__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Send Code</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

interface FormData {
  username: string;
}

export default defineComponent({
  name: 'v-forgot-password',
  setup() {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const schema = ref({
      username: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }
      try {
        const { username } = form.value;
        await Auth.forgotPassword(username);

        router.push({
          path: '/forgot-password-submit',
          query: {
            username,
          },
        });
      } catch (error) {
        error.value = error;
      }
    };

    return {
      error,
      handleSubmit,
      schema,
    };
  },
});
</script>
