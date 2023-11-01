const apiKey = '1af868675d9edd491f5b6845701f947c';                                                      // API key
let city = 'Vancouver';                                                                                 // City name
let weather = {};                                                                              

const fetchAPIData = async () => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`          // Endpoint URL
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error ', error);
    }
}

const printWeather = async () => {
    const weather = await fetchAPIData();
    console.log(weather);
}

printWeather();
// Weather we can expect -> weather.main (Clear, CLouds, Rain, Snow, Thunderstorm, Mist, Fog, Haze, Smoke, Drizzle, Tornado, Hurricane)
// We only have special styles for Raining and Sunny, so for any other case -> don't change the style, keep it halloween colour