[![npm](https://img.shields.io/npm/v/@vue-toolkit/aws-auth)](https://www.npmjs.com/package/@vue-toolkit/aws-auth)
[![ci](https://github.com/thesmythgroup/vue-toolkit/workflows/ci/badge.svg)](https://github.com/thesmythgroup/vue-toolkit/actions)

# @vue-toolkit/aws-auth

Completely style-able components for [Amazon Cognito](https://aws.amazon.com/cognito/) workflows.

## Features

- 🚀 Vue components with minimal styles
- 🕵️‍♂️ Amazon Cognito workflows
- 🔒 Router authentication guards
- 💪 Written in TypeScript

## Installation

```
npm install --save @vue-toolkit/aws-auth @vue-toolkit/common @aws-amplify/auth
```

> Vue Toolkit requires vue >= v3.2 or @vue/composition-api >= v1.1

## Usage

```ts
import Vue from 'vue';
import { Auth } from '@aws-amplify/auth';
import Common from '@vue-toolkit/common';
import AwsAuth from '@vue-toolkit/aws-auth';

Auth.configure({
  // your configuration values go here
});

Vue.use(Common);
Vue.use(AwsAuth);
```

Add routes for authentication components:

```ts
import VueRouter, { RouteConfig } from 'vue-router';
import { createAuthRoutes } from '@vue-toolkit/aws-auth';

const router = new VueRouter({
  mode: 'history',
  routes: [
    // your other routes go here
    ...createAuthRoutes(),
  ],
});
```

Optionally, import the minimal default Sass styles:

```scss
@import '@vue-toolkit/aws-auth/sass/components';
```

## Credits

`@vue-toolkit/aws-auth` is a project by [TSG](https://thesmythgroup.com/), a full-service digital agency taking software from concept to launch.
Our powerhouse team of designers and engineers build iOS, Android, and web apps across many industries.
