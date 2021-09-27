<template>
  <section class="confirm-sign-up">
    <!-- todo: i18n -->
    <h1 class="confirm-sign-up__title">Confirm Sign Up</h1>
    <v-form
      class="confirm-sign-up__form"
      :validation-schema="schema"
      :initial-value="initialValue"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Username">
        <v-input name="username" disabled></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-field label="Code">
        <v-input name="code"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <v-button type="submit">Confirm</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';

interface FormData {
  username: string;
  code: string;
}

export default defineComponent({
  name: 'v-confirm-sign-up',
  setup() {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const initialValue = ref<Partial<FormData> | null>(null);
    const schema = ref({
      username: [validators.required],
      code: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { username, code } = form.value;
        await Auth.confirmSignUp(username, code);
        router.push({ path: '/sign-in' });
      } catch (error) {
        error.value = error;
      }
    };

    onMounted(() => {
      const username = router.currentRoute.query.username as string;
      initialValue.value = { username };
    });

    return {
      error,
      handleSubmit,
      initialValue,
      schema,
    };
  },
});
</script>
