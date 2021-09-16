import { shallowMount } from '@vue/test-utils';

import { SignIn } from '.';

describe('SignIn.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SignIn, {
      global: {
        stubs: ['router-link'],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
