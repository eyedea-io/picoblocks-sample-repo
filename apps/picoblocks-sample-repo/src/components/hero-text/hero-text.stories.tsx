import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroText, { HeroTextProps } from './hero-text';

export default {
  title: 'Components/HeroText',
} as Meta;

export const Default: Story<HeroTextProps> = (args) => (
  <HeroText
    {...args}
    title1="Data to enrich your"
    title2="online business"
    buttons={[{ label: 'Get started', primary: true }, { label: 'Live demo' }]}
  >
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
  </HeroText>
);

Default.args = {};
