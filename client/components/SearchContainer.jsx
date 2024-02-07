import React from 'react';
import { useState } from 'react';


const SearchContainer = ({ handleSearch }) => {

  return (
    <>
      <div className='flex flex-col items-center rounded-md bg-white shadow-lg p-2 '>
        <div className='text-xl p-1 m-2'>
          Find the <span className='text-primary'>perfect</span> stay.
        </div>
        <div>
          <label htmlFor="destinationInput" className='block text-sm font-medium leading-6 text-gray-900'>Destination:</label>
          <input className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' value="Paris" placeholder='Where to?' type='text' id='destinationInput' name='destinationInput' />
        </div>
        <div>
          <label htmlFor="checkIn" className='block text-sm font-medium leading-6 text-gray-900'>Check-in:</label>
          <input className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' value="2024-04-28" placeholder='YYYY-MM-DD' type='text' id='checkIn'></input>
          <label htmlFor="checkOut" className='block text-sm font-medium leading-6 text-gray-900'>Check-out:</label>
          <input className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' value="2024-05-05" placeholder="YYYY-MM-DD" type='text' id='checkOut'></input>
        </div>
        <div>
          <button onClick={handleSearch} className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white m-1 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Search</button>
        </div>
      </div>
    </>
  )
}

export default SearchContainer;
