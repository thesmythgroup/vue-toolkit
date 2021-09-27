import 'regenerator-runtime/runtime';

import VueCompositionAPI from '@vue/composition-api';
import Vue from 'vue';

import Common from '../common/src';
import Forms from '../forms/src';
import AwsAuth from './src';

Vue.use(VueCompositionAPI);
Vue.use(Common);
Vue.use(Forms);
Vue.use(AwsAuth);
