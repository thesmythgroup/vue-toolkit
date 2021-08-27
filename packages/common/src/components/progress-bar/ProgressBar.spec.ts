import { shallowMount } from '@vue/test-utils';

import { ProgressBar } from '.';

describe('ProgressBar', () => {
  it('renders', () => {
    const wrapper = shallowMount(ProgressBar);
    expect(wrapper).toBeDefined();
  });
});
