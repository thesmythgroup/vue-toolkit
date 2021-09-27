<template>
  <section class="setup-mfa">
    <!-- todo: i18n -->
    <h1 class="setup-mfa__title">Setup MFA</h1>
    <v-form
      class="setup-mfa__form"
      :validation-schema="schema"
      :initial-value="initialValue"
      @submit="handleSubmit"
    >
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Type">
        <!-- todo: base these options off config -->
        <v-select name="type">
          <v-option value="NOMFA">None</v-option>
          <v-option value="TOTP">TOTP</v-option>
          <v-option value="SMS">SMS</v-option>
        </v-select>
        <v-field-error name="required">Field is required</v-field-error>
      </v-field>

      <v-button outline class="mr-1" @click="handleForget">
        Forget this device
      </v-button>
      <v-button type="submit">Submit</v-button>
    </v-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { FormSubmitEvent, validators } from '@vue-toolkit/forms';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

type MFAType = 'TOTP' | 'SMS' | 'NOMFA';

interface FormData {
  type: MFAType;
}

export default defineComponent({
  name: 'v-change-mfa',
  setup() {
    const router = useRouter();
    const error = ref<AuthError | null>(null);
    const initialValue = ref<FormData | null>(null);
    const schema = ref({
      type: [validators.required],
    });

    const handleSubmit = async (form: FormSubmitEvent<FormData>) => {
      if (!form.valid) {
        return;
      }

      try {
        const { type } = form.value;
        const user = await Auth.currentAuthenticatedUser();
        await Auth.setPreferredMFA(user, type);
      } catch (error) {
        error.value = error;
      }
    };

    const handleForget = async () => {
      // todo: check if we are remembered first

      try {
        await Auth.forgetDevice();
      } catch (error) {
        error.value = error;
      }

      router.push({ path: '/sign-in' });
    };

    onMounted(async () => {
      const user = await Auth.currentAuthenticatedUser();
      const preferred = await Auth.getPreferredMFA(user);

      const type = (preferred === 'SMS_MFA' ? 'SMS' : preferred) as MFAType;
      initialValue.value = { type };
    });

    return {
      error,
      handleForget,
      handleSubmit,
      initialValue,
      schema,
    };
  },
});
</script>
