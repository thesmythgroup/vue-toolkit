import { shallowMount } from '@vue/test-utils';

import { Input } from '.';

describe('Input', () => {
  it('renders', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper).toBeDefined();
  });
});
