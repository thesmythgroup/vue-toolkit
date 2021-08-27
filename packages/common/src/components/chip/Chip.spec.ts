import { shallowMount } from '@vue/test-utils';

import { Chip } from '.';

describe('Chip', () => {
  it('renders', () => {
    const wrapper = shallowMount(Chip);
    expect(wrapper).toBeDefined();
  });
});
