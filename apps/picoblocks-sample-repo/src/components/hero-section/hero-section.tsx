import cx from 'classnames';
import React from 'react';
import Header from '../header/header';
import HeroText from '../hero-text/hero-text';
import styles from './hero-section.module.css';
import bannerImage from './banner.jpg';
import { ReactComponent as AngledSeparatorSvg } from './angled-separator.svg';

export const HeroSection: React.FC = () => {
  return (
    <div className={cx('relative', styles.HeroSectionHeight)}>
      <div className={'absolute top-0 right-0 bottom-0'}>
        <img src={bannerImage} alt="" className="h-full" />
        <div
          className={
            'absolute left-0 top-0 bottom-0 text-white -translate-x-1/2 transform-gpu'
          }
        >
          <AngledSeparatorSvg />
        </div>
      </div>
      <div className="max-w-320 relative">
        <Header
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
        <div className="mt-28 pr-180">
          <HeroText
            title1="Data to enrich your"
            title2="online business"
            buttons={[
              { label: 'Get started', primary: true },
              { label: 'Live demo' },
            ]}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </HeroText>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
