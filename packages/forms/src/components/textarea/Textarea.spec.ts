import { shallowMount } from '@vue/test-utils';

import { Textarea } from '.';

describe('Textarea', () => {
  it('renders', () => {
    const wrapper = shallowMount(Textarea, {
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
