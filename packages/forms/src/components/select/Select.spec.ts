import { shallowMount } from '@vue/test-utils';

import { Select } from '.';

describe('Select', () => {
  it('renders', () => {
    const wrapper = shallowMount(Select);
    expect(wrapper).toBeDefined();
  });
});
