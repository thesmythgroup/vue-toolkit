import { shallowMount } from '@vue/test-utils';

import { SignUp } from '.';

describe('SignUp.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SignUp, {
      stubs: ['router-link'],
    });
    expect(wrapper).toBeDefined();
  });
});
