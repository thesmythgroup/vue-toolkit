import { shallowMount } from '@vue/test-utils';

import { ConfirmSignUp } from '.';

describe('ConfirmSignUp.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ConfirmSignUp, {
      mocks: {
        $route: {
          query: {
            username: 'test@example.org',
          },
        },
      },
    });
    expect(wrapper).toBeDefined();
  });
});