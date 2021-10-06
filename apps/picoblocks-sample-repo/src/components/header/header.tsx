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
    <div className="px-8 pt-6 flex gap-10 items-end">
      <Logo className="text-indigo-600" />
      <div className="flex gap-10 pb-1">
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
    </div>
  );
};

export default Header;
