# Weather App

This is a weather app built in React, utilizing the Open Weather API and GeoDB API. It allows users to add cities and compare weather conditions in them. Users have the option to filter cities by temperature range and sort them by temperature and air quality.

## Features

- Add cities to compare weather conditions
- Filter cities by temperature range
- Sort cities by temperature and air quality
- Utilizes Open Weather API and GeoDB API for weather data
- Uses Bootstrap for styling
- Uses cookies to store the last selected city by the user

## Deployment

The application is dockerized and hosted on AWS using Elastic Beanstalk. You can access the deployed application [here](#).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd weather_app

2. Install dependencies:
   ```bash
   npm install

3. Start the application:
   ```bash
   npm start

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Add cities by clicking the "Add City" button.
2. Use the temperature range slider to filter cities.
3. Click on the temperature or air quality column headers to sort cities accordingly.

## Technologies Used
- React
- Open Weather API
- GeoDB API
- Bootstrap
- Cookies
- Docker
- AWS Elastic Beanstalk
