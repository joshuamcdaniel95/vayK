import React, { useEffect, useState } from 'react';
import RentalsContainer from './RentalsContainer.jsx';
import HotelsContainer from './HotelsContainer.jsx';
import SearchContainer from './SearchContainer.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const PageContentContainer = () => {
  const [searchValues, setSearchValues] = useState('');
  const [hotelsData, setHotelsData] = useState([]);
  const [sortMethod, setSortMethod] = useState('Rating')
  const [hotelsList, setHotelsList] = useState([]);
  const [filters, setFilters] = useState({
    priceMax: Infinity,
    ratingMin: -Infinity,
  })

  useEffect(() => {
    if (searchValues)
      hotelFetch();
  }, [searchValues]);

  useEffect(() => {
    if (hotelsData.length)
      createHotelList();
  }, [hotelsData, sortMethod, filters]);

  function handleSearch() {
    const destinationInput = document.getElementById('destinationInput').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    setSearchValues({ destinationInput, checkIn, checkOut });
  }

  function hotelFetch() {
    console.log('Running hotelFetch....')
    fetch(`http://localhost:3000/api/hotel-info?query=${searchValues.destinationInput}&checkIn=${searchValues.checkIn}&checkOut=${searchValues.checkOut}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        setHotelsData(response);
      })
      .catch((err) => console.log('ERROR while searching hotels: ', err))
  }

  function createHotelList() {
    console.log('Creating Hotel List...');
    const hotelsDataCopy = [...hotelsData];

    switch (sortMethod) {
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

    const filteredHotelData = hotelsDataCopy
      .filter((hotel) => Number(hotel.priceForDisplay.slice(1)) < filters.priceMax)
      .filter((hotel) => hotel.bubbleRating.rating >= filters.ratingMin);

    const hotels = filteredHotelData.map((hotel, i) => {
      const hotelName = hotel.title.slice(3);
      const hotelPhoto = hotel.cardPhotos[0].sizes.urlTemplate.replace('{width}', 100).replace('{height}', 100);
      return (
        <div key={i} className="flex border-t border-gray-200 p-2 m-1">
          <img className="h-6" src={hotelPhoto} />
          <a href={hotel.commerceInfo.externalUrl}>{hotelName}</a>
          <p>{hotel.priceForDisplay}/night for 1 bedroom</p>
          <p>Rating: {hotel.bubbleRating.rating}/5</p>
        </div>)
    })

    setHotelsList(hotels);
  }

  return (
    <div className='h-screen flex flex-col justify-between'>
      <NavBar />
      <div className='h-max flex justify-around items-center '>
        <SearchContainer handleSearch={handleSearch} />
        <RentalsContainer searchValues={searchValues} />
        <HotelsContainer setFilters={setFilters} setSortMethod={setSortMethod} filters={filters} hotelsList={hotelsList} />
      </div>
      <Footer />
    </div>
  )
}


export default PageContentContainer;