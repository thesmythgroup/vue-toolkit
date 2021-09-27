import { shallowMount } from '@vue/test-utils';

import { ConfirmSignUp } from '.';

describe('ConfirmSignUp.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ConfirmSignUp, {
      mocks: {
        $router: {
          currentRoute: {
            query: {
              username: 'test@example.org',
            },
          },
        },
      },
    });
    expect(wrapper).toBeDefined();
  });
});
