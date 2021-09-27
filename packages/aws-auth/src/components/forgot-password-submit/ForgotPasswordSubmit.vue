<template>
  <section class="forgot-password-submit">
    <!-- todo: i18n -->
    <h1 class="forgot-password-submit__title">Forgot Password Submit</h1>
    <v-form
      class="forgot-password-submit__form"
      :validation-schema="schema"
      :initial-value="initalValue"
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

      <v-field label="New Password">
        <v-input type="password" name="password" autocomplete="off"></v-input>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <!-- todo: resend -->
      <p>Lost your code? <a href="#">Resend Code</a></p>

      <!-- todo: route config -->
      <p><router-link to="/sign-in">Back to Sign In</router-link></p>

      <v-button type="submit">Submit</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { Auth } from '@aws-amplify/auth';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useRouter } from '../../composition';
import { AuthError } from '../../interfaces';

interface FormData {
  username: string;
  code: string;
  password: string;
}

export default defineComponent({
  name: 'v-forgot-password-submit',
  setup() {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const initalValue = ref<Partial<FormData> | null>(null);
    const schema = ref({
      username: [validators.required],
      code: [validators.required],
      password: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { username, code, password } = form.value;
        await Auth.forgotPasswordSubmit(username, code, password);

        router.push({ path: '/sign-in' });
      } catch (error) {
        error.value = error;
      }
    };

    onMounted(() => {
      const username = router.currentRoute.query.username as string;
      initalValue.value = { username };
    });

    return {
      error,
      handleSubmit,
      initalValue,
      schema,
    };
  },
});
</script>
