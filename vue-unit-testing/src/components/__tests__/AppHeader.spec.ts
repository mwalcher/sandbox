import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
  it('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  it('if user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});
