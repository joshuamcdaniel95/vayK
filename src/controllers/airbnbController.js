const airbnbController = {};
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1f5aeb2710msh9a669b8d46e7a92p110609jsn6857816995e3',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
};

airbnbController.searchAirbnb = (req, res, next) => {
  const { query, checkIn, checkOut } = req.query;
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${query}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;

  fetch(url, options)
    .then((result) => result.json())
    .then((result) => {
      res.locals.airbnbData = result.results;
      return next();
    })
    .catch((err) => console.log('ERROR while fetching rentals: ', err));
};

module.exports = airbnbController;
