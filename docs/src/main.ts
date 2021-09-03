/// <reference types="vue-router/types" />
import AppOptions from '@/components/AppOptions.vue';
import AppSnippet from '@/components/AppSnippet.vue';
import { Auth } from '@aws-amplify/auth';
import AwsAuth from '../../packages/aws-auth/src/';
import Common from '../../packages/common/src/';
import Forms from '../../packages/forms/src/';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';

Auth.configure({
  userPoolId: process.env.VUE_APP_AWS_USER_POOL_ID,
  userPoolWebClientId: process.env.VUE_APP_AWS_POOL_WEB_CLIENT_ID,
  region: process.env.VUE_APP_AWS_REGION,
});

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Common);
Vue.use(Forms);
Vue.use(AwsAuth);

Vue.component('app-options', AppOptions);
Vue.component('app-snippet', AppSnippet);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
