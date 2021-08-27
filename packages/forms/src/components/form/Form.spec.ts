import { shallowMount } from '@vue/test-utils';

import { Form } from '.';

describe('Form', () => {
  it('renders', () => {
    const wrapper = shallowMount(Form);
    expect(wrapper).toBeDefined();
  });
});
