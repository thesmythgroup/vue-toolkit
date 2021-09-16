import { shallowMount } from '@vue/test-utils';

import { Input } from '.';

describe('Input', () => {
  it('renders', () => {
    const wrapper = shallowMount(Input, {
      global: {
        provide: {
          form: {
            addControl: jest.fn(),
            removeControl: jest.fn(),
          },
        },
      },
    });
    expect(wrapper).toBeDefined();
  });
});
