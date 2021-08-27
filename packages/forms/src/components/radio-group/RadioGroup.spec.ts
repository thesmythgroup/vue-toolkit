import { shallowMount } from '@vue/test-utils';

import { RadioGroup } from '.';

describe('RadioGroup', () => {
  it('renders', () => {
    const wrapper = shallowMount(RadioGroup);
    expect(wrapper).toBeDefined();
  });
});
