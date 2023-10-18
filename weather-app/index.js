const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const weatherInfo = document.getElementById('weather-info');

async function getWeather() {
  const location = document.getElementById('location').value;

  if (!location) {
    alert('Please enter a location.');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      alert('Weather data not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching weather data. Please try again.');
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;

  const weatherDescription = weather[0].description;
  const temperature = main.temp;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Weather: ${weatherDescription}</p>
    <p>Temperature: ${temperature}°C</p>
  `;
}
