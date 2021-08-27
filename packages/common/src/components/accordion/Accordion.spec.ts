import { shallowMount } from '@vue/test-utils';

import { Accordion } from '.';

describe('Accordion', () => {
  it('renders', () => {
    const wrapper = shallowMount(Accordion);
    expect(wrapper).toBeDefined();
  });
});
