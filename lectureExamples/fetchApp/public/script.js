const apiKey = '1af868675d9edd491f5b6845701f947c';                                                      // API key
let city = 'Vancouver';                                                                                      // Longitude

const fetchAPIData = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` // Endpoint URL
    fetch(apiUrl).then((response) => {
        return response.json(); // This returns a promise (takes time to convert to JSON)
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error('Fetch error: ', error);
    })
}

fetchAPIData();
// Weather we can expect -> weather.main (Clear, CLouds, Rain, Snow, Thunderstorm, Mist, Fog, Haze, Smoke, Drizzle, Tornado, Hurricane)