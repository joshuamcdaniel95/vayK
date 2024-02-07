const cityCoordinates = require('../coordinates.js');

const hotelController = {};
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1f5aeb2710msh9a669b8d46e7a92p110609jsn6857816995e3',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  },
};

hotelController.searchHotels = (req, res, next) => {
  const { query, checkIn, checkOut } = req.query;
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${cityCoordinates[query].latitude}&longitude=${cityCoordinates[query].longitude}&checkIn=${checkIn}&checkOut=${checkOut}&pageNumber=1&currencyCode=USD`;

  fetch(url, options)
    .then((result) => result.json())
    .then((result) => {
      res.locals.hotelData = result.data.data;
      return next();
    })
  // .catch((err) => 'ERROR while fetching hotels: ', err);
};

module.exports = hotelController;
