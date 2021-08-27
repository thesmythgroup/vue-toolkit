import { shallowMount } from '@vue/test-utils';

import { Card } from '.';

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallowMount(Card);
    expect(wrapper).toBeDefined();
  });
});
