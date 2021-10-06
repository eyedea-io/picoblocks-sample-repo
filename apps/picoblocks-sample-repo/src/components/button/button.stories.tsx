import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './button';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Component) => (
      <div className="bg-gray-500 bg-opacity-25 p-10 h-screen">
        <Component />
      </div>
    ),
  ],
} as Meta;

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Button>Get started</Button>
  </div>
);

export const Full: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Button full>Get started</Button>
  </div>
);

export const VariantWhite: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Button variant="white">Get started</Button>
  </div>
);
