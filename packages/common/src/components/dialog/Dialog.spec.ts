import { shallowMount } from '@vue/test-utils';

import { Dialog } from '.';

describe('Dialog', () => {
  it('renders', () => {
    const wrapper = shallowMount(Dialog);
    expect(wrapper).toBeDefined();
  });
});
