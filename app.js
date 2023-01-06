const cityName = document.querySelector(".cityName");
const tempDisplay = document.querySelector(".temp-display");
const minTemp = document.querySelector(".mintemp-display");
const maxtemp = document.querySelector(".maxtemp-display");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity-display");
const pressure = document.querySelector(".pressure");
const feelsLike = document.querySelector(".feels-like");
const degree = document.querySelector(".degree");
const btn = document.querySelector(".btn");
const fInput = document.querySelector(".fInput");

const weatherApp = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=979c340bdde65e98ed678a69f633c00d`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityName.textContent = city;
      tempDisplay.textContent = `${data.main.temp} °C`;
      minTemp.textContent = `${data.main.temp_min} °C`;
      maxtemp.textContent = `${data.main.temp_max} °C`;
      windSpeed.textContent = `${data.wind.speed} km/hr`;
      humidity.textContent = `Humidity is ${data.main.humidity} %`;
      pressure.textContent = `Pressure is ${data.main.pressure} P`;
      feelsLike.textContent = `Feels like ${data.main.feels_like} °C`;
      degree.textContent = `Wind degree is ${data.wind.deg} `;
    });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  weatherApp(fInput.value);
  fInput.value = "";
});

weatherApp("Mumbai");
