import { shallowMount } from '@vue/test-utils';

import { ConfirmSignIn } from '.';

describe('ConfirmSignIn.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ConfirmSignIn, {
      global: {
        stubs: ['router-link'],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
