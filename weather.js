let searchInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector(".city-name");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let country = document.querySelector("#country");
let emoji = document.querySelector("#emoji");
let error = document.querySelector("#error");

const API_KEy = "04126511178345da85770845251111";
async function displaylocation() {
  let location = searchInput.value;
  try {
    let res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEy}&q=${location}`
    );
    if (!res.ok) {
      throw new Error("Not found");
      return;
    }

    let data = await res.json();

    if (data) {
      cityName.textContent = data.location.region;
      country.textContent = data.location.country;
      temp.textContent = data.current.temp_c + "°C";
      description.textContent = data.current.condition.text;
      emoji.src = data.current.condition.icon;
    }
    console.log("Weather Data:", data);
  } catch (err) {
    error.innerHTML = "City Not Found ❌";
    console.log("Error fetching weather data:", err);
  }
}

searchBtn.addEventListener("click", () => {
  displaylocation();
});
