import { shallowMount } from '@vue/test-utils';

import { Field } from '.';

describe('Field', () => {
  it('renders', () => {
    const wrapper = shallowMount(Field);
    expect(wrapper).toBeDefined();
  });
});
