import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterDropdown({ setFilters, filters, filterCategory }) {
  return (
    <Menu as="div" className="relative inline-block text-left mx-0.5" open={false}>
      <div>
        <Menu.Button aria-label='Filter Button' className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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

        {/* <--- When Dropdown Menu Open ---> */}

        <details open className="absolute right-0 z-10 mt-2 w-80 origin-top-right overflow-hidden rounded-lg bg-gray-100 border border-gray-200 open:shadow-lg text-gray-700">
          <summary className="cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden hidden">
          </summary>

          <form action="" className="flex w-full border-t border-gray-200">
            <fieldset className="w-full">

              {/* <--- Sort Menu ---> */}
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Rating</legend>
              <div className="space-y-2 px-5 py-6">

                {/* <--- Sort Minimum Rating: 5 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by minimum rating of 5'
                    onClick={() => {
                      let key = "ratingMin" + filterCategory;
                      const newFilters = { ...filters, [key]: 5 };
                      setFilters(newFilters);
                    }}
                    id="excellent5" type="checkbox" name="excellent5" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="excellent5" className="ml-3 text-sm font-medium"> Excellent (5)</label>
                </div>

                {/* <--- Sort Minimum Rating: 4 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by minimum rating of 4'
                    onClick={() => {
                      let key = "ratingMin" + filterCategory;
                      const newFilters = { ...filters, [key]: 4 };
                      setFilters(newFilters);
                    }}
                    id="great4" type="checkbox" name="tgreat4" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="great4" className="ml-3 text-sm font-medium"> Great (4+)</label>
                </div>

                {/* <--- Sort Minimum Rating: 3 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by minimum rating of 3'
                    onClick={() => {
                      let key = "ratingMin" + filterCategory;
                      const newFilters = { ...filters, [key]: 3 };
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

              {/* <--- Filter Menu ---> */}
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price /night</legend>

              <div className="space-y-2 px-5 py-6">

                {/* <--- Filter Max Price: 100 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by maximum nightly rate of 100 USD'
                    onClick={() => {
                      let key = "priceMax" + filterCategory;
                      const newFilters = { ...filters, [key]: 100 };
                      setFilters(newFilters);
                    }}
                    id="under-100" type="radio" name="Price" value="under $100" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="under-100" className="ml-3 text-sm font-medium"> under $100 </label>
                </div>

                {/* <--- Filter Max Price: 400 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by maximum nightly rate of 400 USD'
                    onClick={() => {
                      let key = "priceMax" + filterCategory;
                      const newFilters = { ...filters, [key]: 400 };
                      setFilters(newFilters);
                    }}
                    id="under-400" type="radio" name="Price" value="under $400" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="under-400" className="ml-3 text-sm font-medium"> under $400 </label>
                </div>

                {/* <--- Filter Max Price: 700 ---> */}
                <div className="flex items-center">
                  <input
                    aria-label='Filter by maximum nightly rate of 700 USD'
                    onClick={() => {
                      let key = "priceMax" + filterCategory;
                      const newFilters = { ...filters, [key]: 700 };
                      setFilters(newFilters);
                    }}
                    id="under-700" type="radio" name="Price" value="under $700" className="h-5 w-5 rounded border-gray-300" />

                  <label htmlFor="under-700" className="ml-3 text-sm font-medium"> under $700 </label>
                </div>

                {/* <--- Reset Filters ---> */}
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
      </Transition >
    </Menu >
  )
}
