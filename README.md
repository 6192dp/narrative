
# About the app

1. This web application displays a list of buy orders available for a user and a list of datasets 
2. One can also see the buy order details by clicking on any buy order from the listings page
3. The buy orders can be edited and deleted from the buy order details page
4. The buy orders listings also has an option to filter items by country 

# Tech stack used

This project was bootstrapped with Create React App and uses react-router for navigation and axios for HTTP network requests

## Steps to run the app

1. Clone this repository
### `git clone https://github.com/6192dp/narrative.git`

2. Go to the root of the project

3. Install node modules 
### `npm install`

4. Run the app in the local environment
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser


# Project Structure

1. src/index.js is the entry point of the project
2. App.js has all the possible routes listed
3. Each route has its own folder in src/routes/ with index.js being its entry point
4. Each route folder has its own styles.css
5. A custom axios handler method is available in api.js for HTTP requests

