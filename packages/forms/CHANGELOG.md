# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.1](https://github.com/thesmythgroup/vue-toolkit/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2021-09-18)


### Bug Fixes

* decouple sass files across packages ([86da918](https://github.com/thesmythgroup/vue-toolkit/commit/86da918fdaf26698847618beb7a0e91858c87a53))
* **forms:** form control compatibility ([9632853](https://github.com/thesmythgroup/vue-toolkit/commit/9632853f031e454a0f3c90c40861e47f3f3e1d85))


### Features

* **forms:** convert to composition api ([ddea78a](https://github.com/thesmythgroup/vue-toolkit/commit/ddea78af1643d4475a4781288aa6a423da9132c1))


### BREAKING CHANGES

* **forms:** Form prop `value` has been renamed to `initialValue`.





# [1.0.0-alpha.0](https://github.com/thesmythgroup/vue-toolkit/compare/v0.2.0...v1.0.0-alpha.0) (2021-09-15)


### Features

* Add Vue3 compatibility ([2eb50f3](https://github.com/thesmythgroup/vue-toolkit/commit/2eb50f3a3b11fdd403f9721d646ca224a88d989a)), closes [#6](https://github.com/thesmythgroup/vue-toolkit/issues/6)
* **forms:** add form validation ([1db4007](https://github.com/thesmythgroup/vue-toolkit/commit/1db4007bda37db85b173b835cf2c8abc0e138930)), closes [#1](https://github.com/thesmythgroup/vue-toolkit/issues/1)
* **forms:** add validators ([5d7b6ab](https://github.com/thesmythgroup/vue-toolkit/commit/5d7b6ab0d0bd30ef9d7d33aed4e1488f3ebb3fe3))
* **forms:** update default theme ([6bc3cf4](https://github.com/thesmythgroup/vue-toolkit/commit/6bc3cf4fe2e550809cbea75dbee5fe41703f8d38))


### BREAKING CHANGES

* Require `@vue/composition-api` when using Vue 2
* **forms:** Sass variable names changed. Field and radio group class names changed.





# 0.2.0 (2021-09-03)


### Features

* add form submit values ([aa5fe54](https://github.com/thesmythgroup/vue-toolkit/commit/aa5fe5477c76b92f2aea28336181378689f1dab9))
* add form value prop ([9352f9a](https://github.com/thesmythgroup/vue-toolkit/commit/9352f9abf86be9f9f3149f727b06cebbd3878c45))
* **forms:** rename field error/hint components ([b0ae5b9](https://github.com/thesmythgroup/vue-toolkit/commit/b0ae5b91f092aaf3375e4692e6719193b7481dd9))


### BREAKING CHANGES

* **forms:** Rename `v-error`/`v-hint` to
`v-field-error`/`v-field-hint`.
