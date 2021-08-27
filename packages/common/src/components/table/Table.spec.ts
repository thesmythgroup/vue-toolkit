import { shallowMount } from '@vue/test-utils';

import { Table } from '.';

describe('Table', () => {
  it('renders', () => {
    const wrapper = shallowMount(Table, {
      props: {
        data: [],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
