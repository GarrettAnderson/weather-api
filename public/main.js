let currentWeather = {}
const appKey = 'aa1b094472a96c37a26f10903aedb34d'
// user inputs a zip code or city name

// click search button to query api
const getWeather = () => {
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

document.querySelector('.search-button').addEventListener('click', getWeather)
// display the weather conditions via the DOM
