<template>
  <section class="setup-mfa">
    <!-- todo: i18n -->
    <h1 class="setup-mfa__title">Setup MFA</h1>
    <form class="setup-mfa__form" @submit="handleSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Type">
        <!-- todo: base these options off config -->
        <v-select name="type" v-model="type">
          <v-option value="NOMFA">None</v-option>
          <v-option value="TOTP">TOTP</v-option>
          <v-option value="SMS">SMS</v-option>
        </v-select>
      </v-field>

      <v-button outline class="mr-1" @click="handleForget">
        Forget this device
      </v-button>
      <v-button type="submit">Submit</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';
import { useRouter } from '../../composition';

type MFAType = 'TOTP' | 'SMS' | 'NOMFA';

export default defineComponent({
  name: 'v-change-mfa',
  setup() {
    const router = useRouter();
    const type = ref<MFAType>('NOMFA');
    const error = ref<AuthError | null>(null);

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.setPreferredMFA(user, type.value);
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

      type.value = (preferred === 'SMS_MFA' ? 'SMS' : preferred) as MFAType;
    });

    return {
      type,
      error,
      handleForget,
      handleSubmit,
    };
  },
});
</script>
