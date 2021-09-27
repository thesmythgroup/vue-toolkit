[![npm](https://img.shields.io/npm/v/@vue-toolkit/forms)](https://www.npmjs.com/package/@vue-toolkit/forms)
[![ci](https://github.com/thesmythgroup/vue-toolkit/workflows/ci/badge.svg)](https://github.com/thesmythgroup/vue-toolkit/actions)

# @vue-toolkit/forms

Completely style-able, fully accessible form UI components, built with Vue.

## Features

- 🚀 Vue components with minimal styles
- 🎉 Fully accessible
- 🎨 Sass variables
- 📂 [BEM](http://getbem.com/) class names
- 💪 Written in TypeScript

## Installation

```
npm install --save @vue-toolkit/forms @vue-toolkit/common
```

> Vue Toolkit requires `@vue/composition-api` >= v1.1

## Usage

```ts
import Vue from 'vue';
import Common from '@vue-toolkit/common';
import Forms from '@vue-toolkit/forms';

Vue.use(Common);
Vue.use(Forms);
```

Optionally, import the minimal default Sass styles:

```scss
@import '@vue-toolkit/forms/sass/components';
```

## Validators

A validator is a function that processes a value and returns error information or null. A `null` return value means that validation has passed.

### Built-in Validators

```ts
import { validators } from '@vue-toolkit/forms';
```

| Validator   | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| `email`     | Requires the value pass an email validation test.                                            |
| `maxLength` | Requires the length of the value to be less than or equal to the provided maximum length.    |
| `max`       | Requires the value to be less than or equal to the provided number.                          |
| `minLength` | Requires the length of the value to be greater than or equal to the provided minimum length. |
| `min`       | Requires the value to be greater than or equal to the provided number.                       |
| `pattern`   | Requires the value to match a regex pattern.                                                 |
| `required`  | Requires the value to be non-empty.                                                          |

### Custom Validators

```ts
const mustBeAwesome = (value) => {
  return value.includes('awesome') ? null : { awesome: true };
};
```

## Credits

`@vue-toolkit/forms` is a project by [TSG](https://thesmythgroup.com/), a full-service digital agency taking software from concept to launch.
Our powerhouse team of designers and engineers build iOS, Android, and web apps across many industries.
