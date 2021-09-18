# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.1](https://github.com/thesmythgroup/vue-toolkit/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2021-09-18)


### Bug Fixes

* **aws-auth:** add paths for peer dependencies ([97059cc](https://github.com/thesmythgroup/vue-toolkit/commit/97059cc06d71fd22c13a4da7af680538aea9b223))
* **common:** component compatibility ([9df7fbb](https://github.com/thesmythgroup/vue-toolkit/commit/9df7fbb859af4420450d7213358123afb41c6f97))
* decouple sass files across packages ([86da918](https://github.com/thesmythgroup/vue-toolkit/commit/86da918fdaf26698847618beb7a0e91858c87a53))
* **docs:** docs build config ([256e3de](https://github.com/thesmythgroup/vue-toolkit/commit/256e3def97b65b18b65d8b241767ab361e858e97))
* **docs:** home page links ([4e006fd](https://github.com/thesmythgroup/vue-toolkit/commit/4e006fdbad67b07ebfa4a8e2984b6dc0190db606))
* **forms:** form control compatibility ([9632853](https://github.com/thesmythgroup/vue-toolkit/commit/9632853f031e454a0f3c90c40861e47f3f3e1d85))
* **paginator:** reset index on page size change ([#9](https://github.com/thesmythgroup/vue-toolkit/issues/9)) ([013ffc4](https://github.com/thesmythgroup/vue-toolkit/commit/013ffc481c7f5eb1592bbca54fd123182dcba1c3))


### Features

* **common:** add breakpoint variables ([f0fdb74](https://github.com/thesmythgroup/vue-toolkit/commit/f0fdb74c527138d8b7a71f658375c04e45a31b0f))
* **common:** add button busy css class ([e11c4ba](https://github.com/thesmythgroup/vue-toolkit/commit/e11c4ba9bd3384b0d8ffd94d02ed98ab1b8efdb7))
* **common:** clickable list items ([8d7f674](https://github.com/thesmythgroup/vue-toolkit/commit/8d7f6749992f4a6f46d8324c93668d7dbea6052d))
* **forms:** convert to composition api ([ddea78a](https://github.com/thesmythgroup/vue-toolkit/commit/ddea78af1643d4475a4781288aa6a423da9132c1))


### BREAKING CHANGES

* **forms:** Form prop `value` has been renamed to `initialValue`.
* **common:** `list__item` class moved from `<li>` element to inner element





# [1.0.0-alpha.0](https://github.com/thesmythgroup/vue-toolkit/compare/v0.2.0...v1.0.0-alpha.0) (2021-09-15)


### Bug Fixes

* **aws-auth:** jest tests ([83ac887](https://github.com/thesmythgroup/vue-toolkit/commit/83ac887b5fd456d7ada49788c2872f4f64b60de7))
* **common:** dialog dismiss event ([d47fdee](https://github.com/thesmythgroup/vue-toolkit/commit/d47fdeeb11574c49f4d8ca7db69a5368c6ae1437))
* **common:** remoive unneeded slots ([3e9ce5a](https://github.com/thesmythgroup/vue-toolkit/commit/3e9ce5ab4e519bef9cb5d47d7835d24fe9000d15))


### Features

* Add Vue3 compatibility ([2eb50f3](https://github.com/thesmythgroup/vue-toolkit/commit/2eb50f3a3b11fdd403f9721d646ca224a88d989a)), closes [#6](https://github.com/thesmythgroup/vue-toolkit/issues/6)
* **aws-auth:** add auth bar ([d81fe0d](https://github.com/thesmythgroup/vue-toolkit/commit/d81fe0d27d07a420c1a6afb4102efa0e4eeafaed))
* **aws-auth:** add default style ([b367f19](https://github.com/thesmythgroup/vue-toolkit/commit/b367f19430b13170ca742fae23bb927ffd1eb32f))
* **common:** add table wrapper element ([1478205](https://github.com/thesmythgroup/vue-toolkit/commit/1478205bbc7e9cc8e165a5e21ede6f5768b8800a))
* **common:** close popover on outside click ([94b542b](https://github.com/thesmythgroup/vue-toolkit/commit/94b542b435c6963a34d00f56c42d8c97add600b7))
* **common:** update default theme ([82d513a](https://github.com/thesmythgroup/vue-toolkit/commit/82d513af5e325d390e9dd5f30cc5c074af28746e))
* **forms:** add form validation ([1db4007](https://github.com/thesmythgroup/vue-toolkit/commit/1db4007bda37db85b173b835cf2c8abc0e138930)), closes [#1](https://github.com/thesmythgroup/vue-toolkit/issues/1)
* **forms:** add validators ([5d7b6ab](https://github.com/thesmythgroup/vue-toolkit/commit/5d7b6ab0d0bd30ef9d7d33aed4e1488f3ebb3fe3))
* **forms:** update default theme ([6bc3cf4](https://github.com/thesmythgroup/vue-toolkit/commit/6bc3cf4fe2e550809cbea75dbee5fe41703f8d38))


### BREAKING CHANGES

* Require `@vue/composition-api` when using Vue 2
* **forms:** Sass variable names changed. Field and radio group class names changed.
* **common:** Sass variable names changed. Accordion and list class names changed.





# 0.2.0 (2021-09-03)


### Features

* add form submit values ([aa5fe54](https://github.com/thesmythgroup/vue-toolkit/commit/aa5fe5477c76b92f2aea28336181378689f1dab9))
* add form value prop ([9352f9a](https://github.com/thesmythgroup/vue-toolkit/commit/9352f9abf86be9f9f3149f727b06cebbd3878c45))
* **forms:** rename field error/hint components ([b0ae5b9](https://github.com/thesmythgroup/vue-toolkit/commit/b0ae5b91f092aaf3375e4692e6719193b7481dd9))


### BREAKING CHANGES

* **forms:** Rename `v-error`/`v-hint` to
`v-field-error`/`v-field-hint`.
