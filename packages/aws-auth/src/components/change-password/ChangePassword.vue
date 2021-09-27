<template>
  <section class="change-password">
    <!-- todo: i18n -->
    <h1 class="change-password__title">Change Password</h1>
    <v-form
      class="change-password__form"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Old Password">
        <v-input type="password" name="oldPassword"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="New Password">
        <v-input type="password" name="newPassword"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-button type="submit">Submit</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

interface FormData {
  oldPassword: string;
  newPassword: string;
}

export default defineComponent({
  name: 'v-change-password',
  setup() {
    const error = ref<AuthError | null>(null);
    const schema = ref({
      oldPassword: [validators.required],
      newPassword: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { oldPassword, newPassword } = form.value;
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(user, oldPassword, newPassword);
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
