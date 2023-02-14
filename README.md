## SUPERFUND LOCATOR 

Use this app to find Superfund Sites near you, learn about health risks associated with living near superfund sites, and environmental impacts of toxic waste facilities. 
This app was created as a capstone project for [Ada Developers Academy](https://adadevelopersacademy.org/) 

## Project Description: 

Our app allows users to search for Superfund Sites on our map where they can search by address, get the name of the site, the status of the site's listing on the National Priorities List, as well as the congressional district where the site resides. Users can also read about health and environmental impacts of superfund sites and have access to many external links for further information. 

Technologies used in this app are the Google Maps API in React, react-vis to visually display data, and a Flask backend connected to a PSQL database.

## How To Install and Run this Project:

Install this project using:
**npm install** 
or
**yarn add** 
the following dependencies: 
@googlemaps/markerclusterer: "^2.0.15",
@testing-library/jest-dom: "^5.14.1",
@testing-library/react: "^13.0.0",
@testing-library/user-event: "^13.2.1",
axios: "^1.3.0",
react: "^18.2.0",
react-dom: "^18.2.0",
@react-google-maps/api,
react-scripts: "5.0.1",
react-scroll: "^1.8.9",
react-vis: "^1.11.12",
use-places-autocomplete: "^4.0.0",
web-vitals: "^2.1.0"


Create your own Google Maps API Key by following the instructions provided by Google [here](https://developers.google.com/maps). 

Create a .env.local file and store your Google Maps API Key as follows:
REACT_APP_GOOGLE_MAPS_API_KEY=<"YOUR_API_KEY">

Run the react app using:
**npm start**
or
**yarn start**