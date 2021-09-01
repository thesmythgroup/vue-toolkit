import { shallowMount } from '@vue/test-utils';

import { ForgotPasswordSubmit } from '.';

describe('ForgotPasswordSubmit.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ForgotPasswordSubmit, {
      stubs: ['router-link'],
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
