import { shallowMount } from '@vue/test-utils';

import { AuthRoot } from '.';

describe('AuthRoot.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(AuthRoot, {
      global: {
        stubs: ['router-view'],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
