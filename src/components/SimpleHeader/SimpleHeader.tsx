import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export interface NavigationLink {
  name: string;
  href: string;
}

export interface SimpleHeaderProps {
  navigationLinks: NavigationLink[];
  bgColor: string;
  linkColor: string;
  hoverColor: string;
  activeColor: string;
  activeLink?: string;
  headerTitle?: string;
  logo?: string | undefined;
  alt?: string;
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  containerPaddingStyle?: string;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({
  navigationLinks,
  headerTitle,
  bgColor,
  linkColor,
  hoverColor,
  activeColor,
  activeLink,
  logo,
  alt,
  onLinkClick,
  containerPaddingStyle,
}) => {
  return (
    <header>
      <Popover className={`relative ${bgColor}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <a className="flex justify-start lg:w-0 lg:flex-1" href="/">
            <span className="sr-only">{headerTitle}</span>
            {logo ? <img className="h-16 w-auto" src={logo} alt={alt} /> : headerTitle}
          </a>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className={`inline-flex items-center justify-center rounded-md ${bgColor} p-2 ${linkColor} ${hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500`}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.name}
                to={`/${item.name}/`}
                className={clsx(
                  activeLink?.includes(item.name) ? activeColor : linkColor,
                  'block relative px-5 pt-1 pb-2',
                  'text-center leading-tight font-light text-xl',
                  'border-transparent border-2 bg-transparent hover:border-b-2s rounded-2xl',
                  `text-base font-medium ${hoverColor}`,
                )}
                onClick={onLinkClick}
              >
                {item.name}
              </NavLink>
            ))}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>{logo ? <img className="h-16 w-auto" src={logo} alt={alt} /> : headerTitle}</div>
                  <div className="-mr-2">
                    <Popover.Button
                      className={`inline-flex items-center justify-center rounded-md bg-white p-2 ${linkColor} ${hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6"></div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigationLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      to={`/${item.name}/`}
                      className={clsx(
                        activeLink?.includes(item.name) ? activeColor : linkColor,
                        'block relative px-5 pt-1 pb-2',
                        'text-center leading-tight font-light text-xl',
                        'border-transparent border-2 bg-transparent hover:border-b-2s rounded-2xl',
                        `text-base font-medium ${hoverColor}`,
                      )}
                      onClick={onLinkClick}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default SimpleHeader;
