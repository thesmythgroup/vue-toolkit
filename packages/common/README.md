[![npm](https://img.shields.io/npm/v/@vue-toolkit/common)](https://www.npmjs.com/package/@vue-toolkit/common)
[![ci](https://github.com/thesmythgroup/vue-toolkit/workflows/ci/badge.svg)](https://github.com/thesmythgroup/vue-toolkit/actions)

# @vue-toolkit/common

Completely style-able, fully accessible UI components, built with Vue.

## Features

- 🚀 Vue components with minimal styles
- 🎉 Fully accessible
- 🏆 Semantic HTML
- 🎨 Sass variables
- 📂 [BEM](http://getbem.com/) class names
- 💪 Written in TypeScript

## Installation

```
npm install --save @vue-toolkit/common
```

> Vue Toolkit requires `@vue/composition-api` >= v1.1

## Usage

```ts
import Vue from 'vue';
import Common from '@vue-toolkit/common';

Vue.use(Common);
```

Optionally, import the minimal default Sass styles and/or utility classes:

```scss
@import '@vue-toolkit/common/sass/components';
@import '@vue-toolkit/common/sass/utilities';
```

## Credits

`@vue-toolkit/common` is a project by [TSG](https://thesmythgroup.com/), a full-service digital agency taking software from concept to launch.
Our powerhouse team of designers and engineers build iOS, Android, and web apps across many industries.
