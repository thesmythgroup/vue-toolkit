import { shallowMount } from '@vue/test-utils';

import { Select } from '.';

describe('Select', () => {
  it('renders', () => {
    const wrapper = shallowMount(Select, {
      provide: {
        form: {
          addControl: jest.fn(),
          removeControl: jest.fn(),
        },
      },
    });
    expect(wrapper).toBeDefined();
  });
});
