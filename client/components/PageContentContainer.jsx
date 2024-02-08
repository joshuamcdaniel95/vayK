import React, { useEffect, useState } from 'react';
import RentalsContainer from './RentalsContainer.jsx';
import HotelsContainer from './HotelsContainer.jsx';
import SearchContainer from './SearchContainer.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const PageContentContainer = () => {

  const [hotelsData, setHotelsData] = useState([]);
  const [rentalsData, setRentalsData] = useState([]);
  const [hotelsList, setHotelsList] = useState([]);
  const [rentalsList, setRentalsList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchValues, setSearchValues] = useState('');
  const [sortMethod, setSortMethod] = useState({ hotelsSort: 'Rating', rentalsSort: 'Rating' });
  const [filters, setFilters] = useState({
    priceMaxHotels: Infinity,
    priceMaxRentals: Infinity,
    ratingMinHotels: -Infinity,
    ratingMinRentals: -Infinity,
  })

  useEffect(() => {
    if (searchValues) {
      fetchHotelsAndRentals();
    }
  }, [searchValues]);

  useEffect(() => {
    if (hotelsData.length) {
      createHotelsList();
    }
  }, [hotelsData, sortMethod.hotelsSort, filters.priceMaxHotels, filters.ratingMinHotels]);

  useEffect(() => {
    if (rentalsData.length) {
      createRentalsList();
    }
  }, [rentalsData, sortMethod.rentalsSort, filters.priceMaxRentals, filters.ratingMinRentals]);

  const controller = new AbortController();
  const throttle = (func, wait) => {
    let shouldThrottle = false;

    return function (...args) {
      if (shouldThrottle) {
        console.log('Throttled!');
        return;
      }

      shouldThrottle = true;

      setTimeout(() => {
        shouldThrottle = false;
      }, wait);

      func.apply(this, args);
    }
  };


  function handleSearch() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const destinationInput = document.getElementById('destinationInput').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    setSearchValues({ destinationInput, checkIn, checkOut });
  };

  function fetchHotelsAndRentals() {
    Promise.all([
      fetch(`http://localhost:3000/api/hotel-info?query=${searchValues.destinationInput}&checkIn=${searchValues.checkIn}&checkOut=${searchValues.checkOut}`),
      fetch(`http://localhost:3000/api/airbnb-info?query=${searchValues.destinationInput}&checkIn=${searchValues.checkIn}&checkOut=${searchValues.checkOut}`)
    ])
      .then(([hotelResponse, rentalResponse]) => {
        Promise.all([
          hotelResponse.json(),
          rentalResponse.json()
        ])
          .then(([hotelsJSON, rentalsJSON]) => {
            setHotelsData(hotelsJSON);
            setRentalsData(rentalsJSON);
          })
          .catch((err) => console.log('ERROR while setting Hotels and Rentals Data: ', err))
      })
      .catch((err) => console.log('ERROR while parsing Hotel and Rentals JSON: ', err))
  }

  function createHotelsList() {

    const hotelsDataCopy = [...hotelsData];

    // Handle API Inconsistency
    for (const hotel of hotelsDataCopy) {
      if (hotel.priceForDisplay === null) {
        setHotelsList([<div className='text-sm text-gray-700 p-2'>We're sorry! Hotel data not available right now.</div>])
        return;
      }
    }

    //Hotel Sorts
    switch (sortMethod.hotelsSort) {
      case 'Rating':
        hotelsDataCopy.sort((a, b) => b.bubbleRating.rating - a.bubbleRating.rating)
        break;
      case 'Price: Low to High':
        hotelsDataCopy.sort((a, b) => Number(a.priceForDisplay.slice(1)) - Number(b.priceForDisplay.slice(1)))
        break;
      case 'Price: High to Low':
        hotelsDataCopy.sort((a, b) => Number(b.priceForDisplay.slice(1)) - Number(a.priceForDisplay.slice(1)))
        break;
    }

    //Hotel Filters
    const filteredHotelsData = hotelsDataCopy
      .filter((hotel) => Number(hotel.priceForDisplay.slice(1)) < filters.priceMaxHotels)
      .filter((hotel) => hotel.bubbleRating.rating >= filters.ratingMinHotels);

    // Each Hotel Listing
    const hotels = filteredHotelsData.map((hotel, i) => {

      // Images for Carousel
      const imgCarousel = hotel.cardPhotos.map((image) => {
        const hotelPhotoURL = image.sizes.urlTemplate.replace('{width}', 700).replace('{height}', 700);
        return (
          <div className="carousel-item">
            <a href={hotelPhotoURL} target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={hotelPhotoURL} alt="Hotel Photo" className="rounded-box h-28 w-44 object-cover border-gray-400 border shadow-md" />
            </a>
          </div>
        )
      })

      const hotelName = hotel.title.slice(3);

      return (
        <div key={i} className="flex max-w-lg border-t border-gray-400 p-2 m-1">
          <div className="carousel carousel-center max-w-md p-1 space-x-4 bg-neutral rounded-box ">
            {imgCarousel}
          </div>
          <div className="flex flex-col mx-2 justify-center text-sm">
            <a className="mx-2 mb-2 min-w-60 text-gray-900" href={hotel.commerceInfo.externalUrl} target="_blank" rel="noopener noreferrer">{hotelName}</a>
            <div className="flex text-xs text-gray-600 ">
              <p className='mx-2'>{hotel.priceForDisplay}/night for 1 bedroom</p>
              <p className='mx-2'>Rating: {hotel.bubbleRating.rating}/5</p>
            </div>
          </div>
        </div>
      )
    })

    setHotelsList(hotels);
    setIsLoading(false);
  }

  function createRentalsList() {

    const rentalsDataCopy = [...rentalsData];

    // Rental Sort
    switch (sortMethod.rentalsSort) {
      case 'Rating':
        rentalsDataCopy.sort((a, b) => b.rating - a.rating)
        break;
      case 'Price: Low to High':
        rentalsDataCopy.sort((a, b) => Number(a.price.rate) - Number(b.price.rate))
        break;
      case 'Price: High to Low':
        rentalsDataCopy.sort((a, b) => Number(b.price.rate) - Number(a.price.rate))
        break;
    }

    //Rental Filters
    const filteredRentalsData = rentalsDataCopy
      .filter((rental) => Number(rental.price.rate) < filters.priceMaxRentals)
      .filter((rental) => rental.rating >= filters.ratingMinRentals);

    // Each Rental Listing
    const rentals = filteredRentalsData.map((rental, i) => {

      // Images for Carousel
      const imgCarousel = rental.images.map((image, imgIndex) => {
        return (
          <div className="carousel-item">
            <a href={rental.images[imgIndex]} target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={rental.images[imgIndex]} alt="Rental Photo" className="rounded-box h-28 w-44 object-cover border-gray-400 border shadow-md" />
            </a>
          </div>
        )
      })

      return (
        <div key={i} className="flex max-w-lg border-t border-gray-400 p-2 m-1">
          <div className="carousel carousel-center max-w-md p-1 space-x-4 bg-neutral rounded-box ">
            {imgCarousel}
          </div>
          <div className="flex flex-col mx-2 justify-center text-sm">
            <a className="mx-2 mb-2 min-w-60 text-gray-900" href={rental.url} target="_blank" rel="noopener noreferrer">{rental.name}</a>
            <div className="flex text-xs text-gray-600 ">
              <p className="mx-2">${rental.price.rate}/night</p>
              <p className="mx-2">{rental.bedrooms} bed</p>
              <p className="mx-2">{rental.bathrooms} bath</p>
              <p className="mx-2">Rating: {rental.rating}/5</p>
            </div>
          </div>
        </div>
      )
    })

    setRentalsList(rentals);
    setIsLoading(false);
  }

  //Component Return
  return (
    <div className='h-screen flex flex-col justify-between'>
      <NavBar />
      <div className='h-max flex justify-around items-center '>
        <SearchContainer handleSearch={handleSearch} isLoading={isLoading} rentalsList={rentalsList} hotelsList={hotelsList} />
        <RentalsContainer setFilters={setFilters} setSortMethod={setSortMethod} filters={filters} sortMethod={sortMethod} rentalsList={rentalsList} hotelsList={hotelsList} />
        <HotelsContainer setFilters={setFilters} setSortMethod={setSortMethod} filters={filters} sortMethod={sortMethod} rentalsList={rentalsList} hotelsList={hotelsList} />
      </div>
      <Footer />
    </div>
  )
}

export default PageContentContainer;
