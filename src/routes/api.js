const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const airbnbController = require('../controllers/airbnbController');


router.get('/hotel-info', hotelController.searchHotels, (req, res) =>
  res.status(200).json(res.locals.hotelData),
);

router.get('/airbnb-info', airbnbController.searchAirbnb, (req, res) =>
  res.status(200).json(res.locals.airbnbData),
);

module.exports = router;
