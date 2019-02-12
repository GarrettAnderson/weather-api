let currentWeather = {}
const appKey = 'aa1b094472a96c37a26f10903aedb34d'
// user inputs a zip code or city name

// click search button to query api
const getWeatherByZip = () => {
  let zipcode = document.querySelector('.search-weather').value
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=' + appKey)
    .then((resp) => {
      return resp.json()
    })
    // open the package
    .then((zipcode) => {
      currentWeather = zipcode
      console.log(currentWeather)
    })
}

const getWeatherByCity = () => {
  let city = document.querySelector('.search-weather-city').value
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&appid=' + appKey)
    .then((resp) => {
      return resp.json()
    })
    // open the package
    .then((city) => {
      currentWeather = city
      console.log(currentWeather)
    })
}

document.querySelector('.search-button').addEventListener('click', getWeatherByZip)
document.querySelector('.search-button-city').addEventListener('click', getWeatherByCity)
