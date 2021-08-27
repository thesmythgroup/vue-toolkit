import { shallowMount } from '@vue/test-utils';

import { SetupMFA } from '.';

describe('SetupMFA.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SetupMFA);
    expect(wrapper).toBeDefined();
  });
});
