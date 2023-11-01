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
const mainContainer = document.getElementsByClassName('main-container')[0];

getButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const input = document.getElementById('action-input');
    const inputValue = input.value;
    input.value = '';

    const weatherData = await fetchAPIData(inputValue);
    const simpleWeather = weatherData.weather[0].main;
    const description = weatherData.weather[0].description;
    console.log('length', mainContainer.childNodes.length);
    if (mainContainer.childNodes.length > 7) {
        const weatherDiv = document.getElementsByClassName('weather-data')[0];
        weatherDiv.childNodes[0].textContent = inputValue ? inputValue: '';
        weatherDiv.childNodes[1].textContent = simpleWeather ? simpleWeather: '';
        weatherDiv.childNodes[2].textContent = description ? description : '';
    } else {
        // Create a new div, and insert it as a child of the main Container
        const weatherDiv = document.createElement('div'); // weather div
        const h1Elem = document.createElement('h1'); // create our h1
        const p1Elem = document.createElement('p'); // create our p1
        const p2Elem = document.createElement('p'); // create our p2

        // Set our content
        h1Elem.textContent = inputValue ? inputValue: '';
        p1Elem.textContent = simpleWeather ? simpleWeather: '';
        p2Elem.textContent = description ? description : '';
    
        // Appending
        weatherDiv.appendChild(h1Elem);
        weatherDiv.appendChild(p1Elem);
        weatherDiv.appendChild(p2Elem);
        weatherDiv.className = 'weather-data';
        mainContainer.appendChild(weatherDiv);
    }
})