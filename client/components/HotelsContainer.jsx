import React from "react";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

const HotelsContainer = ({ setFilters, setSortMethod, hotelsList, rentalsList, filters, sortMethod }) => {

  if (hotelsList.length && rentalsList.length) {
    return (
      <div className="flex-col m-2 max-h-lvh rounded-box bg-white border-4 border-double border-primary border-opacity-80 shadow-lg">
        <div className="flex justify-between items-center m-2 p-2">
          <h1 className="m-2 text-2xl text-gray-900">Hotels</h1>
          <div>
            <SortDropdown setSortMethod={setSortMethod} sortMethod={sortMethod} sortCategory={"hotelsSort"} />
            <FilterDropdown setFilters={setFilters} filters={filters} filterCategory={"Hotels"} />
          </div>
        </div>
        <div className="flex-col max-h-96 overflow-scroll">
          {hotelsList}
        </div>
      </div>
    )
  }
}

export default HotelsContainer;