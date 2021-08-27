import { shallowMount } from '@vue/test-utils';

import { ChangePassword } from '.';

describe('ChangePassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ChangePassword);
    expect(wrapper).toBeDefined();
  });
});
