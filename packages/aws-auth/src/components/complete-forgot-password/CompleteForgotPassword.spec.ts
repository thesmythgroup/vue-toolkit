import { shallowMount } from '@vue/test-utils';

import { CompleteForgotPassword } from '.';

describe('CompleteForgotPassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(CompleteForgotPassword, {
      global: {
        stubs: ['router-link'],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
