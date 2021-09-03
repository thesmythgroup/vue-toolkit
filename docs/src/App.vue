<template>
  <main class="flex min-h-screen">
    <v-sidebar>
      <section v-for="pkg in packages" :key="pkg.name">
        <h2>{{ pkg.name }}</h2>
        <nav>
          <v-list>
            <v-list-item v-for="(page, index) in pkg.pages" :key="index">
              <router-link :to="page.to">{{ page.label }}</router-link>
            </v-list-item>
          </v-list>
        </nav>
      </section>
    </v-sidebar>

    <div class="flex-auto p-1">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      packages: [
        {
          name: 'Common',
          pages: [
            { to: '/common/accordion', label: 'Accordion' },
            { to: '/common/button', label: 'Button' },
            { to: '/common/card', label: 'Card' },
            { to: '/common/chip', label: 'Chip' },
            { to: '/common/dialog', label: 'Dialog' },
            { to: '/common/list', label: 'List' },
            { to: '/common/paginator', label: 'Paginator' },
            { to: '/common/popover', label: 'Popover' },
            { to: '/common/progress-bar', label: 'Progress Bar' },
            { to: '/common/sidebar', label: 'Sidebar' },
            { to: '/common/table', label: 'Table' },
            { to: '/common/tabs', label: 'Tabs' },
          ],
        },
        {
          name: 'Forms',
          pages: [
            { to: '/forms/checkbox', label: 'Checkbox' },
            { to: '/forms/field', label: 'Field' },
            { to: '/forms/form', label: 'Form' },
            { to: '/forms/input', label: 'Input' },
            { to: '/forms/radio-group', label: 'Radio Group' },
            { to: '/forms/select', label: 'Select' },
            { to: '/forms/textarea', label: 'Textarea' },
          ],
        },
        {
          name: 'AWS Auth',
          pages: [
            { to: '/aws-auth/sign-in', label: 'Sign In' },
            { to: '/aws-auth/sign-up', label: 'Sign Up' },
            { to: '/aws-auth/confirm-sign-in', label: 'Confirm Sign In' },
            { to: '/aws-auth/confirm-sign-up', label: 'Confirm Sign Up' },
            { to: '/aws-auth/forgot-password', label: 'Forgot Password' },
            {
              to: '/aws-auth/require-new-password',
              label: 'Require New Password',
            },
            { to: '/aws-auth/change-password', label: 'Change Password' },
            { to: '/aws-auth/setup-mfa', label: 'Setup MFA' },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import '@vue-toolkit/common/sass/components';
@import '@vue-toolkit/common/sass/utilities';
@import '@vue-toolkit/forms/sass/components';

body {
  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  margin: 0;
}
</style>