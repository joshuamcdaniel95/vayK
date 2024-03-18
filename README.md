# Welcome to vayK
Search for airbnbs and hotels by city, and compare listings side by side.

Run `npm run dev` to start dev server (_localhost:5500_).

## Current Functionality

### Search
Enter a destination (_Capitalize city name_). Currently accepts 50 cities, these can be found in `coordinates.js`.

### Sort
Sort Rentals and Hotels independently, by Rating, and Prices. Defaults to sorting by Rating.

### Filter
Filter Rentals and Hotels independently, by Maximum Price/night and Minimum Rating. Defaults to Minimum Rating of 3.

## Non-Functional Components

### Nav-bar
Currently presentational only.

### User Login Icon
Currently presentational only.

## Known Issues

### Hotel List Behavior
On first attempt of a specific search, hotels list will not populate correctly. Run the search once more to fix. This is an issue with the TripAdvisor API, will be addressed soon.

## Roadmap

- Users can save individual listings
- Saved listings and user data stored in database rather than session storage
- Saved listings populate tiles on Saved Stays page
- Login, cookies, Oauth
