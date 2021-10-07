import cx from 'classnames';
import React from 'react';
import Header from '../header/header';
import HeroText from '../hero-text/hero-text';
import styles from './hero-section.module.css';
import bannerImage from './banner.jpg';
import { ReactComponent as AngledSeparatorSvg } from './angled-separator.svg';

export const HeroSection: React.FC = () => {
  return (
    <div
      className={cx('relative max-w-7xl lg:pl-10', styles.HeroSectionHeight)}
    >
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-32 xl:pb-32">
        <div
          className={
            'hidden lg:block absolute right-0 top-0 bottom-0 text-white translate-x-1/2 transform-gpu'
          }
        >
          <AngledSeparatorSvg />
        </div>
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
        <div className="mt-10 md:mt-16 lg:mt-28">
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
      <div
        className={
          'lg:absolute h-56 sm:h-72 md:h-96 lg:h-auto top-0 right-0 bottom-0 overflow-hidden'
        }
      >
        <img src={bannerImage} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
