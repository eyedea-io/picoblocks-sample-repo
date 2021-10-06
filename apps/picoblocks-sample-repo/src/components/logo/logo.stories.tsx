import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo } from './logo';

export default {
  title: 'Components/Logo',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A81',
    },
  },
} as Meta;

export const Default: Story = (args) => <Logo {...args} />;

export const Colored: Story = (args) => (
  <Logo {...args} className="text-indigo-600" />
);

export const Large: Story = (args) => <Logo {...args} className="w-32 h-32" />;
