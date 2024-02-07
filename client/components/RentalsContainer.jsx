import React from "react";
import { useEffect, useState } from "react";
import SortDropdown from "./SortDropdown";

const RentalsContainer = ({ searchValues }) => {
  const [rentalsList, setRentalsList] = useState([]);

  function handleRentalSearch() {
    console.log('Running handleRentalSearch....');
    fetch(`http://localhost:3000/api/airbnb-info?query=${searchValues.destinationInput}&checkIn=${searchValues.checkIn}&checkOut=${searchValues.checkOut}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        const rentals = [];
        response.forEach((rental, i) => {
          rentals.push(
            <div key={i} className="flex border rounded p-2 m-1">
              <img className="h-6" src={rental.images[0]} />
              <a href={rental.url}>{rental.name}</a>
              <p>${rental.price.rate}/night</p>
              <p>{rental.bedrooms} bed</p>
              <p>{rental.bathrooms} bath</p>
              <p>Rating: {rental.rating}/5</p>
            </div>
          )
        })
        return setRentalsList(rentals)
      })
      .catch((err) => console.log('ERROR while searching rentals: ', err));
  }

  // useEffect(() => handleRentalSearch(), [searchValues]);

  if (rentalsList.length === 0) return (
    <div>
      <h1 className="text-5xl">vayK.</h1>
      <h2 className="text-3xl">Your Way.</h2>
    </div >
  )
  else {
    return (
      <div className="flex-col m-2 max-h-lvh border rounded">
        <div className="flex items-center m-2 p-2">
          <h1 className="m-2 text-2xl">Rentals</h1>
          <div>
            <SortDropdown id="rentals-sort-button" />
            <button className="border rounded mx-1 p-1">Filter</button>
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