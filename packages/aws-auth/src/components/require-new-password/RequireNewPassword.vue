<template>
  <section class="require-new-password">
    <!-- todo: i18n -->
    <h1 class="require-new-password__title">New Password Required</h1>
    <v-form
      class="require-new-password__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="New Password">
        <v-input type="password" name="password" autocomplete="off"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Change</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Auth, CognitoUser } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

interface FormData {
  password: string;
}

export default defineComponent({
  name: 'v-require-new-password',
  props: {
    user: Object as () => CognitoUser,
  },
  setup(props) {
    const error = ref<AuthError | null>(null);
    const schema = ref({
      password: [validators.required],
    });

    const getUsername = () => {
      return new Promise<string>((resolve, reject) => {
        props.user?.getUserData((error, data) =>
          data ? resolve(data.Username) : reject(error)
        );
      });
    };

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { password } = form.value;
        await Auth.completeNewPassword(props.user, password);

        const username = await getUsername();
        await Auth.signIn(username, password);
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
