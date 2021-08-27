import { shallowMount } from '@vue/test-utils';

import { Paginator } from '.';

describe('Paginator', () => {
  it('renders', () => {
    const wrapper = shallowMount(Paginator);
    expect(wrapper).toBeDefined();
  });
});
