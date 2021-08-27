import { shallowMount } from '@vue/test-utils';

import { Sidebar } from '.';

describe('Sidebar', () => {
  it('renders', () => {
    const wrapper = shallowMount(Sidebar);
    expect(wrapper).toBeDefined();
  });
});
