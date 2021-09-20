import { shallowMount } from '@vue/test-utils';

import { Checkbox } from '.';

describe('Checkbox', () => {
  it('renders', () => {
    const wrapper = shallowMount(Checkbox);
    expect(wrapper).toBeDefined();
  });
});
