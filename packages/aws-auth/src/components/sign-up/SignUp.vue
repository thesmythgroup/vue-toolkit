<template>
  <section class="sign-up">
    <!-- todo: i18n -->
    <h1 class="sign-up__title">Sign Up</h1>
    <v-form
      class="sign-up__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>
      <p v-if="msg">{{ msg }}</p>

      <v-field label="Username">
        <v-input name="username"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Password">
        <v-input type="password" name="password"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Phone">
        <v-input type="tel" name="phone"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: route config -->
      <p>Have an account? <router-link to="/sign-in">Sign In</router-link></p>

      <v-button type="submit">Create Account</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';
import { Auth } from '@aws-amplify/auth';

import {
  AuthError,
  AuthConfig,
  AuthSignUpVerification,
} from '../../interfaces';
import { useRouter } from '../../composition';

interface FormData {
  username: string;
  password: string;
  phone: string;
}

export default defineComponent({
  name: 'v-sign-up',
  setup() {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const msg = ref<string | null>(null);
    const schema = ref({
      username: [validators.required],
      password: [validators.required],
      phone: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { username, password, phone } = form.value;

        // todo: config
        const config = {} as AuthConfig;
        const res = await Auth.signUp({
          username,
          password,
        });

        if (res.userConfirmed) {
          router.push({ path: '/sign-in' });
        } else if (res.codeDeliveryDetails) {
          switch (config.signUpVerification) {
            case AuthSignUpVerification.Code:
              router.push({
                path: '/confirm-sign-up',
                query: { username },
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
      schema,
    };
  },
});
</script>
