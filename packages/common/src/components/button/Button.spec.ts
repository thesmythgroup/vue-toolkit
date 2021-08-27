import { shallowMount } from '@vue/test-utils';

import { Button } from '.';

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper).toBeDefined();
  });
});
