import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '~/utils/helpers';
import ToggleWithIcon from '~/components/ToggleWithIcon';
import Tabs from '~/components/Tabs';
import MiniNavigation from '~/components/MiniNavigation';
import Wallet from '~/components/Wallet';
import WidgetWraperCard from '~/components/Cards/WidgetCards/WidgetWraperCard';
import { widgeRewardsData, widgeValueData, widgeTokentData } from '~/data/data';
import NetWorthWidget from '~/components/NetWorthWidget';
import { NavLink } from '@remix-run/react';

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true,
  },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const accordianItems = [
  {
    id: 1,
    title: 'Accordion Item 1',
    content: 'This is the content for Accordion Item 1.',
  },
  {
    id: 2,
    title: 'Accordion Item 2',
    content: 'This is the content for Accordion Item 2.',
  },
  {
    id: 3,
    title: 'Accordion Item 3',
    content: 'This is the content for Accordion Item 3.',
  },
];

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-primary">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-primary text-textPrimary border-l-2 border-myBlue'
                              : 'text-textSecondary hover:bg-tertiary hover:text-textPrimary',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-textPrimary'
                                : 'text-textSecondary group-hover:text-textPrimary',
                              'mr-4 h-6 w-6 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-secondary">
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <p className="text-textPrimary">CRYPTO</p>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-primary text-textPrimary border-l border-myBlue'
                        : 'text-textSecondary hover:bg-tertiary hover:text-textPrimary',
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-textPrimary'
                          : 'text-textSecondary group-hover:text-textTertiary',
                        'mr-3 h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-tertiary">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myBlue lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-end px-4 bg-primary">
              <div className="ml-4 flex items-center lg:ml-6">
                <ToggleWithIcon />
                <button
                  type="button"
                  className="rounded-full bg-tertiary p-1 text-textSecondary hover:text-textPrimary focus:outline-none focus:ring-2 focus:ring-myBlue focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon
                    className="h-6 w-6 text-textSecondary"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-myBlue focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1 bg-primary">
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <MiniNavigation />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Tabs />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <NetWorthWidget />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Wallet />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <WidgetWraperCard data={widgeRewardsData} />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <WidgetWraperCard data={widgeTokentData} />
            </div>
            <div className="pt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <WidgetWraperCard data={widgeValueData} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
