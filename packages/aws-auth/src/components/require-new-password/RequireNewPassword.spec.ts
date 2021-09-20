import { shallowMount } from '@vue/test-utils';

import { RequireNewPassword } from '.';

describe('RequireNewPassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(RequireNewPassword, {
      stubs: ['router-link'],
    });
    expect(wrapper).toBeDefined();
  });
});
