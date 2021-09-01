import { shallowMount } from '@vue/test-utils';

import { Checkbox } from '.';

describe('Checkbox', () => {
  it('renders', () => {
    const wrapper = shallowMount(Checkbox, {
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
