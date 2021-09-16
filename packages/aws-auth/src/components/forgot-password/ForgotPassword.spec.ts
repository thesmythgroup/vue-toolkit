import { shallowMount } from '@vue/test-utils';

import { ForgotPassword } from '.';

describe('ForgotPassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ForgotPassword, {
      global: {
        stubs: ['router-link'],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
