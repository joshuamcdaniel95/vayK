import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SortDropdown({ setSortMethod, sortMethod, sortCategory }) {
  return (
    <Menu as="div" className="relative inline-block text-left mx-0.5" open={false}>
      <div>
        <Menu.Button aria-label='Sort Button' className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Sort
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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

        {/* <--- When Sort Menu Open ---> */}

        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

            {/* <--- Sort Price Low to High ---> */}
            <Menu.Item>
              {({ active }) => (
                <a
                  aria-label='Sort by price, low to high'
                  href="#"
                  onClick={() => {
                    let newSortMethod = { ...sortMethod, [sortCategory]: 'Price: Low to High' };
                    setSortMethod(newSortMethod);
                  }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Price: Low to High
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">

            {/* <--- Sort Price High to Low ---> */}
            <Menu.Item>
              {({ active }) => (
                <a
                  aria-label='Sort by price, high to low'
                  href="#"
                  onClick={() => {
                    let newSortMethod = { ...sortMethod, [sortCategory]: 'Price: High to Low' };
                    setSortMethod(newSortMethod);
                  }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Price: High to Low
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">

            {/* <--- Sort by Rating ---> */}
            <Menu.Item>
              {({ active }) => (
                <a
                  aria-label='Sort by rating'
                  href="#"
                  onClick={() => {
                    let newSortMethod = { ...sortMethod, [sortCategory]: 'Rating' };
                    setSortMethod(newSortMethod);
                  }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Rating
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
