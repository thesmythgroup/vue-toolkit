import { shallowMount } from '@vue/test-utils';

import { List } from '.';

describe('List', () => {
  it('renders', () => {
    const wrapper = shallowMount(List);
    expect(wrapper).toBeDefined();
  });
});
