// TIME IN THE H1
let now = new Date();
let h1 = document.querySelector("h1");

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h1.innerHTML = `${day}, ${hour}:${minutes}`;

///

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let citySearch = searchInput.value;
  if (citySearch) {
    let locationElement = document.querySelector("h3");
    locationElement.innerHTML = `${citySearch}`;
    let apiKey = "ec69812db7fd144177914635cab17886";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }
  else {
    alert("Enter a city")
}

function showTemperature(response) {
  console.log(response);

  let tempLog = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperatureMain");
  temperatureElement.innerHTML = `${tempLog}`;

  let description = document.querySelector("h2");
  description.innerHTML = response.data.weather[0].main;
}
