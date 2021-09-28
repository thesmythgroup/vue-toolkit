import { shallowMount } from '@vue/test-utils';

import { FormControl } from '.';

describe('FormControl', () => {
  it('renders', () => {
    const wrapper = shallowMount(FormControl);
    expect(wrapper).toBeDefined();
  });
});
