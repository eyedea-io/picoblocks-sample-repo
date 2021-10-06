import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from './header';

export default {
  title: 'Components/Header',
} as Meta;

export const Default: Story<HeaderProps> = (args) => (
  <Header
    {...args}
    items={[
      {
        label: 'Product',
        href: '#',
      },
      {
        label: 'Features',
        href: '#',
      },
      {
        label: 'Marketplace',
        href: '#',
      },
      {
        label: 'Product',
        href: '#',
      },
      {
        label: 'Log in',
        href: '#',
        highlight: true,
      },
    ]}
  />
);

Default.args = {};
