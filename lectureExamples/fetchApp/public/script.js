const apiKey = '1af868675d9edd491f5b6845701f947c';                                                      // API key                                                                                
let weather = {};                                                                              

const fetchAPIData = async (city) => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`          // Endpoint URL
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error ', error);
    }
}

// const printWeather = async () => {
//     weather = await fetchAPIData();
//     console.log(weather);
// }

// printWeather();
// Weather we can expect -> weather.main (Clear, CLouds, Rain, Snow, Thunderstorm, Mist, Fog, Haze, Smoke, Drizzle, Tornado, Hurricane)
// We only have special styles for Raining and Sunny, so for any other case -> don't change the style, keep it halloween colour

const getButton = document.getElementById('action-button');
const weatherDiv = document.getElementById('weather-data');

getButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const input = document.getElementById('action-input');
    const inputValue = input.value;
    input.value = '';

    const weatherData = await fetchAPIData(inputValue);
    const simpleWeather = weatherData.weather[0].main;
    console.log(simpleWeather);

    // Set the display to block if it's none
    if (weatherDiv.style.display === 'none') {
        weatherDiv.style.display = 'block';
    }
})