<template>
  <section>
    <!-- todo: i18n -->
    <h1>Setup MFA</h1>
    <form @submit="onSubmit">
      <p v-if="error">{{ error.message }}</p>

      <v-field label="Type">
        <!-- todo: base these options off config -->
        <v-select name="type" v-model="type">
          <v-option value="NOMFA">None</v-option>
          <v-option value="TOTP">TOTP</v-option>
          <v-option value="SMS">SMS</v-option>
        </v-select>
      </v-field>

      <v-button @click="onForget">Forget this device</v-button>
      <v-button type="submit">Submit</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from '@aws-amplify/auth';

import { AuthError } from '../../interfaces';

type MFAType = 'TOTP' | 'SMS' | 'NOMFA';

export default Vue.extend({
  name: 'v-change-mfa',
  data: () => ({
    type: 'NOMFA' as MFAType,
    error: null as AuthError | null,
  }),
  async mounted() {
    const user = await Auth.currentAuthenticatedUser();
    const type = await Auth.getPreferredMFA(user);

    this.type = (type === 'SMS_MFA' ? 'SMS' : type) as MFAType;
  },
  methods: {
    async onSubmit(event: Event) {
      event.preventDefault();

      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.setPreferredMFA(user, this.type);
      } catch (error) {
        this.error = error;
      }
    },
    async onForget() {
      // todo: check if we are remembered first

      try {
        await Auth.forgetDevice();
      } catch (error) {
        this.error = error;
      }

      this.$router.push({ path: '/sign-in' });
    },
  },
});
</script>
