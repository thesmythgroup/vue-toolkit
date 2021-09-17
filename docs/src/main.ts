import AppAuthBar from '@/components/AppAuthBar.vue';
import AppOptions from '@/components/AppOptions.vue';
import AppSnippet from '@/components/AppSnippet.vue';
import { Auth } from '@aws-amplify/auth';
import AwsAuth from '@vue-toolkit/aws-auth';
import Common from '@vue-toolkit/common';
import Forms from '@vue-toolkit/forms';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

Auth.configure({
  userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_AWS_POOL_WEB_CLIENT_ID,
  region: import.meta.env.VITE_AWS_REGION,
});

const app = createApp(App);

app.use(router);
app.use(Common);
app.use(Forms);
app.use(AwsAuth);

app.component('app-auth-bar', AppAuthBar);
app.component('app-options', AppOptions);
app.component('app-snippet', AppSnippet);

app.mount('#app');
