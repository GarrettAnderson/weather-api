let currentWeather = {}
let zipcode = []
let city = []
const apiKey = 'aa1b094472a96c37a26f10903aedb34d'

// user inputs a zip code or city name

// click search button to query api
const getWeatherByZip = () => {
  zipcode = document.querySelector('.search-weather').value
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + apiKey + '&units=imperial')
    .then((resp) => {
      return resp.json()
    })
    // open the package
    .then((zip) => {
      currentWeather = zip
      console.log(currentWeather)
      document.querySelector('.current-weather-display').textContent =
        currentWeather.weather[0].main + ' - ' + currentWeather.weather[0].description
    })
  // set local storage to save the zipcode
  localStorage.setItem('zip', zipcode)
  console.log(localStorage)
}

const getWeatherByCity = () => {
  city = document.querySelector('.search-weather-city').value
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial')
    .then((resp) => {
      return resp.json()
    })
    // open the package
    .then((city) => {
      currentWeather = city
      console.log(currentWeather)
      document.querySelector('.current-weather-display').textContent =
        currentWeather.weather[0].main + ' - ' + currentWeather.weather[0].description
    })
  // .weather[0].main + ' - ' + currentWeather.weather[0].description
}

// on page load, automatically search user's current location using HTML 5 Geolocation API
const main = () => {
  const geo_success = (position) => {
    console.log(position)
  }
  let watchId = navigator.geolocation.watchPosition(geo_success)
  console.log(watchId)
  // set local storage to save the zipcode
  // localStorage.setItem('zip', zipcode)
  // console.log(localStorage)
}

// const determineZipOrCity = () => {
// let zipcode = document.querySelector('.search-weather').value
// let weatherCondition = currentWeather.weather[0].main
// if the input value is not a number, assume it is a city and run getWeatherByCity function
// if (zipcode === NaN) {
//   console.log('searching by city')
// }
// let weatherCondition = currentWeather.weather[0].main
// if (weatherCondition === 'Rain') {
//   console.log('Cloudy')
// }

document.querySelector('.search-button').addEventListener('click', getWeatherByZip)
// document.querySelector('.search-button').addEventListener('click', determineZipOrCity)
document.querySelector('.search-button-city').addEventListener('click', getWeatherByCity)
document.addEventListener('DOMContentLoaded', main)
