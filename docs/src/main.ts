import AppAuthBar from '@/components/AppAuthBar.vue';
import AppInfo from '@/components/AppInfo.vue';
import AppOptions from '@/components/AppOptions.vue';
import AppSnippet from '@/components/AppSnippet.vue';
import { Auth } from '@aws-amplify/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AwsAuth from '@vue-toolkit/aws-auth';
import Common from '@vue-toolkit/common';
import Forms from '@vue-toolkit/forms';
import VueCompositionAPI from '@vue/composition-api';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';

Auth.configure({
  userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID,
  region: import.meta.env.VITE_AWS_REGION,
});

library.add(faGithub, faFileAlt);

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(VueRouter);
Vue.use(Common);
Vue.use(Forms);
Vue.use(AwsAuth);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('app-auth-bar', AppAuthBar);
Vue.component('app-info', AppInfo);
Vue.component('app-options', AppOptions);
Vue.component('app-snippet', AppSnippet);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
