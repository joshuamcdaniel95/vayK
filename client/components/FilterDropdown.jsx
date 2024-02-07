import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterDropdown({ setFilters, filters }) {
  return (
    <Menu as="div" className="relative inline-block text-left mx-0.5" open={false}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Filter
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

        <details open className="absolute right-0 z-10 mt-2 w-80 origin-top-right overflow-hidden rounded-lg bg-gray-100 border border-gray-200 open:shadow-lg text-gray-700">
          <summary className="cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden hidden">
          </summary>

          <form action="" className="flex w-full border-t border-gray-200">
            <fieldset className="w-full">
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Rating</legend>

              <div className="space-y-2 px-5 py-6">
                <div className="flex items-center">
                  <input
                    onClick={() => {
                      const newFilters = { ...filters, ratingMin: 5 };
                      setFilters(newFilters);
                    }}
                    id="excellent5" type="checkbox" name="excellent5" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="excellent5" className="ml-3 text-sm font-medium"> Excellent (5)</label>
                </div>

                <div className="flex items-center">
                  <input
                    onClick={() => {
                      const newFilters = { ...filters, ratingMin: 4 };
                      setFilters(newFilters);
                    }}
                    id="great4" type="checkbox" name="tgreat4" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="great4" className="ml-3 text-sm font-medium"> Great (4+)</label>
                </div>

                <div className="flex items-center">
                  <input
                    onClick={() => {
                      const newFilters = { ...filters, ratingMin: 3 };
                      setFilters(newFilters);
                    }}
                    id="good3" type="checkbox" name="good3" className="h-5 w-5 rounded border-gray-300" defaultChecked />

                  <label htmlFor="good3" className="ml-3 text-sm font-medium"> Good (3+)</label>
                </div>

                <div className="pt-2">
                  <button type="button" className="text-xs text-gray-500 underline">Reset Rating</button>
                </div>
              </div>
            </fieldset>

            <fieldset className="w-full">
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price /night</legend>

              <div className="space-y-2 px-5 py-6">
                <div className="flex items-center">
                  <input id="300+" type="radio" name="Price" value="300+" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="300+" className="ml-3 text-sm font-medium"> under $100 </label>
                </div>

                <div className="flex items-center">
                  <input id="600+" type="radio" name="Price" value="600+" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="600+" className="ml-3 text-sm font-medium"> under $400 </label>
                </div>

                <div className="flex items-center">
                  <input id="1500+" type="radio" name="Price" value="1500+" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="1500+" className="ml-3 text-sm font-medium"> under $700 </label>
                </div>

                <div className="pt-2">
                  <button type="button" className="text-xs text-gray-500 underline">Reset Price /night</button>
                </div>
              </div>
            </fieldset>
          </form>
          <div className="">
            <div className="flex justify-between border-t border-gray-200 px-5 py-3">
              <button name="reset" type="button" className="rounded text-xs font-medium text-gray-600 underline">Reset All</button>

              <button name="commit" type="button" className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
            </div>
          </div>
        </details>

        {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setSortMethod('Price: High to Low')}
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setSortMethod('Rating')}
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
        </Menu.Items> */}
      </Transition >
    </Menu >
  )
}
