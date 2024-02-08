import React from 'react';

const SearchContainer = ({ handleSearch, isLoading }) => {

  let searchButton;

  if (isLoading) {
    searchButton =
      <div>
        <button aria-label='Search Button' className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white m-1 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 cursor- hover:bg-gray-50'>Searching...
          <img
            className="animate-spin h-5 w-5 mr-3"
            src="https://i.postimg.cc/wv7Ns523/Untitled-design-3.png"
            alt="Loading Spinner"
          />
        </button>
      </div>
  }
  else
    searchButton =
      <input type='submit' value="Search" className='inline-flex justify-center gap-x-1.5 rounded-md bg-white m-1 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer'>
      </input>

  return (
    <>
      <div className='flex flex-col items-center rounded-md bg-white shadow-lg p-2 '>
        <h3 className='text-xl p-1 m-2'>
          Find the <span className='text-primary'>perfect</span> stay.
        </h3>
        <form id='search-form' onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}>

          {/* <--- User Inputs ---> */}
          <div>
            <label htmlFor="destinationInput" className='block text-sm font-medium leading-6 text-gray-900'>Destination:</label>
            <input value='Paris' required pattern='\b[A-Z][a-z]*\b' className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' placeholder='Where to?' type='text' id='destinationInput' name='destinationInput' />
          </div>
          <div>
            <label htmlFor="checkIn" className='block text-sm font-medium leading-6 text-gray-900'>Check-in:</label>
            <input value='2024-04-28' required pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}' className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' placeholder='YYYY-MM-DD' type='text' id='checkIn'></input>
            <label htmlFor="checkOut" className='block text-sm font-medium leading-6 text-gray-900'>Check-out:</label>
            <input value='2024-05-05' required pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}' className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 mb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6' placeholder="YYYY-MM-DD" type='text' id='checkOut'></input>
          </div>
          <div className='flex justify-center'>
            {searchButton}
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchContainer;
