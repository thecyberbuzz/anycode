const state = document.querySelector("#state-name");
const wind = document.querySelector(".wind-speed");
const windDr = document.querySelector(".wind-direction");
const humidity = document.querySelector(".Humidity");
var searchbar = document.querySelector("input");
const description = document.getElementById("weather-desc");
const icon = document.getElementById("weather-icon");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const temperature = document.getElementById("temp");
const maxTemp = document.getElementById("maxTemp");
const MinTemp = document.getElementById("MinTemp");
const feelLike = document.getElementById("feelLike");



// Calling api for current location

function apidata() {
  const successCallback = async (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=24d26e86cc84b567c2140ceb9c8a7861&units=metrics`
    );
    const data = await response.json();
    console.log(data);
    showdata(data);
  };

  const errorCallback = (error) => {
    alert("Allow Location Permission");
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

//  Adding on load eventListener

window.addEventListener("load", apidata);

//  Calling api for search cities

async function apidata2() {
  let searchTask = searchbar.value.toLowerCase();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTask}&appid=24d26e86cc84b567c2140ceb9c8a7861&units=metrics`
  );
  const data = await response.json();

  humidity.innerHTML = `${data?.main?.humidity}%`;
  windDr.innerHTML = `${data?.wind?.deg} N/W`;
  wind.innerHTML =  `${data?.wind?.speed} m/s`;
  state.innerHTML = data?.name;
  temperature.innerHTML = `${Math.floor(data?.main?.temp - 273.15)}°C`;
  maxTemp.innerHTML = `${Math.floor(data?.main?.temp_max - 273.15)}°C`;
  MinTemp.innerHTML = `${Math.floor(data?.main?.temp_min - 273.15)}°C`;
  feelLike.innerHTML = `feels like : ${Math.floor(
    data?.main?.feels_like - 273.15
  )}°C`;
  if (data?.weather[0].description === "mist") {
    icon.innerHTML = `<i class="fa-solid fa-cloud" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "overcast clouds") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-rain" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "haze") {
    icon.innerHTML = `<i class="fa-solid fa-smog" style="font-size: 65px; color: skyblue"></i>`;
  }

  if (data?.weather[0].description === "broken clouds") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "clear sky") {
    icon.innerHTML = `<i class="bi bi-brightness-high" style="font-size: 65px; color: orange"></i>`;
  }
  if (data?.weather[0].description === "light rain") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 65px; color: skyblue"></i>`;
  }

  const sunriseTime = data?.sys?.sunrise;
  var date = new Date(sunriseTime * 1000);
  var sunrisehours = date.getHours();
  var sunriseminutes = "0" + date.getMinutes();
  var sunriseseconds = "0" + date.getSeconds();
  var formattedTime =
    sunrisehours +
    ":" +
    sunriseminutes.substr(-2) +
    ":" +
    sunriseseconds.substr(-2);

  const sunsetTime = data?.sys?.sunset;
  var date2 = new Date(sunsetTime * 1000);
  var sunsethours = date2.getHours();
  var sunsetminutes = "0" + date2.getMinutes();
  var sunsetseconds = "0" + date2.getSeconds();
  var formattedTime2 =
    sunsethours +
    ":" +
    sunsetminutes.substr(-2) +
    ":" +
    sunsetseconds.substr(-2);
  sunrise.innerHTML = formattedTime;
  sunset.innerHTML = formattedTime2;
  description.innerHTML = data?.weather[0].description;

  document.querySelector(".yourWeather").style.opacity = "1";
  document.querySelector(".searchbar-container").style.opacity = "0";
  searchbar.value = "";
}

//Function for showing data on screen

function showdata(data) {
  humidity.innerHTML = `${data?.main?.humidity}%`;
  windDr.innerHTML = `${data?.wind?.deg} N/W`;
  wind.innerHTML = `${data?.wind?.speed} m/s`;
  state.innerHTML = data?.name;
  temperature.innerHTML = `${Math.floor(data?.main?.temp - 273.15)}°C`;
  maxTemp.innerHTML = `${Math.floor(data?.main?.temp_max - 273.15)}°C`;
  MinTemp.innerHTML = `${Math.floor(data?.main?.temp_min - 273.15)}°C`;
  feelLike.innerHTML = `feels like : ${Math.floor(
    data?.main?.feels_like - 273.15
  )}°C`;
  description.innerHTML = data?.weather[0].description;
  if (data?.weather[0].description === "mist") {
    icon.innerHTML = `<i class="fa-solid fa-cloud" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "overcast clouds") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-rain" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "haze") {
    icon.innerHTML = `<i class="fa-solid fa-smog" style="font-size: 65px; color: skyblue"></i>`;
  }

  if (data?.weather[0].description === "broken clouds") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain" style="font-size: 65px; color: skyblue"></i>`;
  }
  if (data?.weather[0].description === "clear sky") {
    icon.innerHTML = `<i class="bi bi-brightness-high" style="font-size: 65px; color: orange"></i>`;
  }
  if (data?.weather[0].description === "light rain") {
    icon.innerHTML = `<i class="fa-solid fa-cloud-shower-heavy" style="font-size: 65px; color: skyblue"></i>`;
  }
  const sunriseTime = data?.sys?.sunrise;
  var date = new Date(sunriseTime * 1000);
  var sunrisehours = date.getHours();
  var sunriseminutes = "0" + date.getMinutes();
  var sunriseseconds = "0" + date.getSeconds();
  var formattedTime =
    sunrisehours +
    ":" +
    sunriseminutes.substr(-2) +
    ":" +
    sunriseseconds.substr(-2);

  const sunsetTime = data?.sys?.sunset;
  var date2 = new Date(sunsetTime * 1000);
  var sunsethours = date2.getHours();
  var sunsetminutes = "0" + date2.getMinutes();
  var sunsetseconds = "0" + date2.getSeconds();
  var formattedTime2 =
    sunsethours +
    ":" +
    sunsetminutes.substr(-2) +
    ":" +
    sunsetseconds.substr(-2);
  sunrise.innerHTML = formattedTime;
  sunset.innerHTML = formattedTime2;
}

// Two button your weather and search weather

let button1 = document.getElementById("ButtonClicked");
button1.addEventListener("click", () => {
  document.querySelector(".yourWeather").style.opacity = "0";
  document.querySelector(".searchbar-container").style.opacity = "1";
});
let button2 = document.getElementById("yourWeather");
button2.addEventListener("click", () => {
  document.querySelector(".yourWeather").style.opacity = "1";
  document.querySelector(".searchbar-container").style.opacity = "0";
});
