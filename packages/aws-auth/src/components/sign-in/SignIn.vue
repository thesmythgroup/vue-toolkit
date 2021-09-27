<template>
  <section class="sign-in">
    <!-- todo: i18n -->
    <h1 class="sign-in__title">Sign In</h1>
    <v-form
      class="sign-in__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Password">
        <v-input type="password" name="password"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: route config -->
      <p>
        Forgot your password?
        <router-link to="/forgot-password">Reset password</router-link>
      </p>
      <p>No account <router-link to="/sign-up">Create account</router-link></p>

      <v-button type="submit">Sign In</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

interface FormData {
  username: string;
  password: string;
}

export default defineComponent({
  name: 'v-sign-in',
  setup(props, { emit }) {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const schema = ref({
      username: [validators.required],
      password: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { username, password } = form.value;
        const user = await Auth.signIn(username, password);
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
      schema,
    };
  },
});
</script>
