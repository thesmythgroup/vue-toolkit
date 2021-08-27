import { shallowMount } from '@vue/test-utils';

import { Popover } from '.';

describe('Popover', () => {
  it('renders', () => {
    const wrapper = shallowMount(Popover);
    expect(wrapper).toBeDefined();
  });
});
