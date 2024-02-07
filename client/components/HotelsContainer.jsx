import React from "react";
import { useState, useEffect } from "react";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";


const HotelsContainer = ({ setFilters, setSortMethod, hotelsList, filters }) => {

  // if (hotelsList.length) {
  return (
    <div className="flex-col m-2 max-h-lvh">
      <div className="flex items-center m-2 p-2">
        <h1 className="m-2 text-2xl">Hotels</h1>
        <SortDropdown setSortMethod={setSortMethod} />
        <FilterDropdown setFilters={setFilters} filters={filters} />
      </div>
      <div className="flex-col max-h-96 overflow-scroll">
        {hotelsList}
      </div>
    </div>
  )
  // }
}

export default HotelsContainer;