import { shallowMount } from '@vue/test-utils';

import { Tabs } from '.';

describe('Tabs', () => {
  it('renders', () => {
    const wrapper = shallowMount(Tabs);
    expect(wrapper).toBeDefined();
  });
});
