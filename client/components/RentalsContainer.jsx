import React from "react";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

const RentalsContainer = ({ setFilters, setSortMethod, rentalsList, hotelsList, filters, sortMethod }) => {

  // Before search, on page load
  if (!rentalsList.length || !hotelsList.length) return (
    <div>
      <div className="flex -my-2">
        <h1 className="text-5xl">vayK.</h1>
        <img
          className="h-16 w-auto mx-12"
          src="https://i.postimg.cc/BnsNgx2t/vay-K-logo.png"
          alt="vayK Logo"
        />
      </div>
      <h2 className="text-3xl">Your Way.</h2>
    </div >
  )

  // After search
  else if (rentalsList.length && hotelsList.length) {
    return (
      <div className="flex-col m-2 max-h-lvh rounded-box bg-white border-4 border-double border-primary border-opacity-80 shadow-lg">
        <div className="flex justify-between items-center m-2 p-2">
          <h1 className="m-2 text-2xl text-gray-900">Rentals</h1>
          <div>
            <SortDropdown setSortMethod={setSortMethod} sortMethod={sortMethod} sortCategory={"rentalsSort"} />
            <FilterDropdown setFilters={setFilters} filters={filters} filterCategory={"Rentals"} />
          </div>
        </div>
        <div className="flex-col max-h-96 overflow-scroll">
          {rentalsList}
        </div>
      </div>
    )
  };
}

export default RentalsContainer;