let currentWeather = {}
const appKey = 'aa1b094472a96c37a26f10903aedb34d'
// user inputs a zip code or city name

// click search button to query api
const getWeatherByZip = () => {
  let zipcode = document.querySelector('.search-weather').value
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + appKey + '&units=imperial')
    .then((resp) => {
      return resp.json()
    })
    // open the package
    .then((zipcode) => {
      currentWeather = zipcode
      console.log(currentWeather.weather[0])
      document.querySelector('.current-weather-display').textContent =
        currentWeather.weather[0].main + ' - ' + currentWeather.weather[0].description
    })
}

const getWeatherByCity = () => {
  let city = document.querySelector('.search-weather-city').value
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + appKey + '&units=imperial')
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

document.querySelector('.search-button').addEventListener('click', getWeatherByZip)
document.querySelector('.search-button-city').addEventListener('click', getWeatherByCity)
