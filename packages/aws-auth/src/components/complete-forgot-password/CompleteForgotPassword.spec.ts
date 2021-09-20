import { shallowMount } from '@vue/test-utils';

import { CompleteForgotPassword } from '.';

describe('CompleteForgotPassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(CompleteForgotPassword, {
      stubs: ['router-link'],
    });
    expect(wrapper).toBeDefined();
  });
});
