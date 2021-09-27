<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign In</h1>
    <v-form
      class="confirm-sign-up__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Confirmation code">
        <v-input name="code"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field>
        <v-checkbox name="remember"> Remember this device? </v-checkbox>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Confirm</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

interface FormData {
  code: string;
  remember: string;
}

export default defineComponent({
  name: 'v-confirm-sign-in',
  props: {
    user: Object as () => CognitoUser,
  },
  setup(props) {
    const error = ref<AuthError | null>(null);
    const schema = ref({
      code: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { code, remember } = form.value;
        await Auth.confirmSignIn(props.user, code);

        if (remember) {
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
      error,
      handleSubmit,
      schema,
    };
  },
});
</script>
