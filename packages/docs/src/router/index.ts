import { createAuthRoutes } from '@vue-toolkit/aws-auth';
import VueRouter, { RouteConfig } from 'vue-router';

import { publicPath } from '../../vue.config';
import AwsAuthRoot from '../pages/AwsAuthRoot.vue';
import Accordion from '../pages/common/Accordion.vue';
import Button from '../pages/common/Button.vue';
import Card from '../pages/common/Card.vue';
import Chip from '../pages/common/Chip.vue';
import Dialog from '../pages/common/Dialog.vue';
import List from '../pages/common/List.vue';
import Paginator from '../pages/common/Paginator.vue';
import Popover from '../pages/common/Popover.vue';
import ProgressBar from '../pages/common/ProgressBar.vue';
import Sidebar from '../pages/common/Sidebar.vue';
import Table from '../pages/common/Table.vue';
import Tabs from '../pages/common/Tabs.vue';
import CommonRoot from '../pages/CommonRoot.vue';
import Checkbox from '../pages/forms/Checkbox.vue';
import Field from '../pages/forms/Field.vue';
import Form from '../pages/forms/Form.vue';
import Input from '../pages/forms/Input.vue';
import RadioGroup from '../pages/forms/RadioGroup.vue';
import Select from '../pages/forms/Select.vue';
import Textarea from '../pages/forms/Textarea.vue';
import FormsRoot from '../pages/FormsRoot.vue';
import Home from '../pages/Home.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/common',
    component: CommonRoot,
    children: [
      { path: '', redirect: 'accordion' },
      { path: 'accordion', component: Accordion },
      { path: 'button', component: Button },
      { path: 'card', component: Card },
      { path: 'chip', component: Chip },
      { path: 'dialog', component: Dialog },
      { path: 'list', component: List },
      { path: 'paginator', component: Paginator },
      { path: 'popover', component: Popover },
      { path: 'progress-bar', component: ProgressBar },
      { path: 'sidebar', component: Sidebar },
      { path: 'table', component: Table },
      { path: 'tabs', component: Tabs },
    ],
  },
  {
    path: '/forms',
    component: FormsRoot,
    children: [
      { path: '', redirect: 'checkbox' },
      { path: 'checkbox', component: Checkbox },
      { path: 'field', component: Field },
      { path: 'form', component: Form },
      { path: 'input', component: Input },
      { path: 'radio-group', component: RadioGroup },
      { path: 'select', component: Select },
      { path: 'textarea', component: Textarea },
    ],
  },
  {
    path: '/aws-auth',
    component: AwsAuthRoot,
    children: [
      { path: '', redirect: 'sign-in' },
      ...createAuthRoutes('/aws-auth'),
    ],
  },
];

const router = new VueRouter({
  base: publicPath,
  mode: 'history',
  routes,
});

export default router;
