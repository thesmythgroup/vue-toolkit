import { shallowMount } from '@vue/test-utils';

import { RadioGroup } from '.';

describe('RadioGroup', () => {
  it('renders', () => {
    const wrapper = shallowMount(RadioGroup, {
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
