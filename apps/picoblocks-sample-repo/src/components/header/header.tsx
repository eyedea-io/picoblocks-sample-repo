import React from 'react';
import { Logo } from '../logo/logo';
import cx from 'classnames';

export interface HeaderProps {
  items: {
    label: string;
    href: string;
    highlight?: boolean;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className="px-4 md:px-8 pt-6 flex gap-10 justify-between items-end">
      <Logo className="text-indigo-600" />
      <div className="hidden gap-10 pb-1 md:flex justify-end">
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className={cx('medium16', {
                'text-gray-500': !item.highlight,
                'text-indigo-600': item.highlight,
              })}
            >
              {item.label}
            </a>
          );
        })}
      </div>
      <button className="md:hidden bg-white rounded-md p-2 -mr-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <svg
          className="h-6 w-6"
          x-description="Heroicon name: outline/menu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Header;
