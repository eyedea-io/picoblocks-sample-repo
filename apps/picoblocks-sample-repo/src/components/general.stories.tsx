import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'General',
} as Meta;

export const Typography: Story = (args) => (
  <div className="grid grid-cols-2 w-180 gap-8">
    <div className="text-sm">regular16</div>
    <div className="text-gray-500 regular16">regular16</div>

    <div className="text-sm">regular20</div>
    <div className="text-gray-500 regular20">regular20</div>

    <div className="text-sm">semibold16</div>
    <div className="text-gray-500 semibold16">semibold16</div>

    <div className="text-sm">medium16</div>
    <div className="text-gray-500 medium16">medium16</div>

    <div className="text-sm">medium18</div>
    <div className="text-gray-500 medium18">medium18</div>

    <div className="text-sm">medium20</div>
    <div className="text-gray-500 medium20">medium20</div>

    <div className="text-sm">extrabold36</div>
    <div className="text-gray-500 extrabold36">extrabold36</div>

    <div className="text-sm">extrabold60</div>
    <div className="text-gray-500 extrabold60">extrabold60</div>
  </div>
);

export const Shadows: Story = (args) => (
  <div className="grid grid-cols-2 w-180 gap-8">
    <div className="text-sm">base</div>
    <div className="bg-white shadow-base w-32 h-32"></div>
  </div>
);

export const Colors: Story = (args) => (
  <div className="grid grid-cols-2 w-180 gap-8">
    <div className="text-sm">indigo-500</div>
    <div className="bg-indigo-500 border border-gray-500 w-32 h-32" />

    <div className="text-sm">indigo-600</div>
    <div className="bg-indigo-600 border border-gray-500 w-32 h-32" />

    <div className="text-sm">gray-500</div>
    <div className="bg-gray-500 border border-gray-500 w-32 h-32" />

    <div className="text-sm">gray-900</div>
    <div className="bg-gray-900 border border-gray-500 w-32 h-32" />

    <div className="text-sm">gray-white</div>
    <div className="bg-white border border-gray-500 w-32 h-32" />
  </div>
);
