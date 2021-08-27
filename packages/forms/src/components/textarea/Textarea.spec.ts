import { shallowMount } from '@vue/test-utils';

import { Textarea } from '.';

describe('Textarea', () => {
  it('renders', () => {
    const wrapper = shallowMount(Textarea);
    expect(wrapper).toBeDefined();
  });
});
