// var currentDay = document.querySelector("#currentDay");
// var currentDate = document.querySelector("#currentDate");
// var day2Name = document.querySelector("#day2Name");
// var day3Name = document.querySelector("#day3Name");
// var searchedItem = document.querySelector("#searchCity");
// var submit =  document.querySelector(".btn");


// let weatherArray = [];



// // let myHttp = new XMLHttpRequest();

// // myHttp.open(
// //   "GET",
// //   `http://api.weatherapi.com/v1/forecast.json?key=462e192b86b54866aef204146240407&q=london&days=3&aqi=no&alerts=no
// //   `
// // );

// // myHttp.send();

// // myHttp.addEventListener("readystatechange", function () {

// //   if (myHttp.readyState == 4) {
// //     weatherArray = JSON.parse(myHttp.response);
// //     display();
// //   }
// // });


// async function getData() {
//   let response = await (await fetch('https://api.weatherapi.com/v1/forecast.json?key=462e192b86b54866aef204146240407&q=London&days=3&aqi=no&alerts=no')) .json()


// console.log(response);

// }
// getData()

// function display() {
//      weatherDisplay = `
//         <div class="row text-center p-5 bg-primary text-white fs-2">
//         <div class="col-md-4">
//         <span class="" id="currentDate">Sunday - ${weatherArray.forecast.forecastday[0].date}</span>
//         </div>
//         <div class="col-md-4">
//         <span id="day2Name">Monday - ${weatherArray.forecast.forecastday[1].date}</span>
//         </div>
//         <div class="col-md-4">
//         <span id="day3Name" >Tuesday - ${weatherArray.forecast.forecastday[2].date}</span>
//         </div>
//     </div>
    
    
//     <div class="row text-center p-5 bg-primary-subtle ">
//         <div class="col-md-4 p-5">
//         <div class="fs-3 mb-3">${weatherArray.location.country}, ${weatherArray.location.name}</div>
//         <div class="fs-1 mb-3" >${weatherArray.forecast.forecastday[0].day.avgtemp_c} C</div>
//         <img src="${weatherArray.forecast.forecastday[0].day.condition.icon}" />
//         </div>
//         <div class="col-md-4 p-5">
//         <div class="fs-3 mb-3">${weatherArray.forecast.forecastday[1].day.avgtemp_c} C</div>
//         <img src="${weatherArray.forecast.forecastday[1].day.condition.icon}" />
//         </div>
//         <div class="col-md-4 p-5">
//         <span>
//         <div class="fs-3 mb-3">${weatherArray.forecast.forecastday[2].day.avgtemp_c} C</div>
//         <img src="${weatherArray.forecast.forecastday[2].day.condition.icon}" />
//         </span>
//         </div>
//     </div>`;

//     document.querySelector("#weather").innerHTML = weatherDisplay;
// }



// function searchCity(city) {

//   submit.                43333addEventListener("click", function() {
//   let  searchedCity = searchedItem.value
//   return searchedCity
//   })
// }
// searchCity()

// // function submitCity(){
// //   submit.addEventListener("click", function() {
    
// //   })
// // }

















// //   <section class="container">
// //         <div class="row">

// //           <h1
// //             class="col d-flex justify-content-center align-items-center city-title"
// //             id="searched-city"
// //           >
// //         <div>
// //         ${weatherArray.location.country}
// //         ${weatherArray.location.name}
// //         </div>

// //           </h1>
// //         </div>
// //       </section>

// //       <!-- temp and day info -->
// //       <section class="current-weather">
// //         <div class="container">
// //           <div class="row">
// //             <h1 class="col temp-title d-flex" id="current-temperature ">
// //             ${weatherArray.forecast.forecastday[0].day.avgtemp_c}
// //             <i class="fa-regular fa-circle fs-6 align-self-start"></i>
// //             </h1>
// //             <div class="col todays-info">
// //             <h2 class="" id="currentDate">${weatherArray.forecast.forecastday[0].date}</h2>
// //             </div>
// //             <div class="col d-flex align-items-center side-info">
// //             </div>
// //           </div>
// //         <br>
// //       </section>

// //       <!--3 day forecast-->
// //       <section class="container">
// //         <div class="row week-forecast">
// //           <div class="col">
// //             <h3>Fri</h3>
// //             <br /><img
// //               src="https://img.icons8.com/color-glass/42/000000/rain.png"
// //             /><br />
// //             <p class="weather">Rain</p>
// //             <span>2°</span>
// //           </div>
// //           <div class="col">
// //             <h3>Sat</h3>
// //             <br /><img
// //               src="https://img.icons8.com/color-glass/42/000000/cloud.png"
// //             /><br />
// //             <p class="weather">Cloudy</p>
// //             <span>4°</span>
// //           </div>
// //           <div class="col">
// //             <h3>Sun</h3>
// //             <br /><img
// //               src="https://img.icons8.com/color-glass/42/000000/partly-cloudy-day.png"
// //             /><br />
// //             <p class="weather">Partly cloudy</p>
// //             <span>6°</span>
// //           </div>

// //         </div>
// //       </section>`;


document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "462e192b86b54866aef204146240407";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=4&aqi=no&alerts=no`;

  const searchCityInput = document.getElementById('searchCity');
  const searchButton = document.getElementById('searchButton');
  

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      updateWeather(data);
    })
    .catch(error => console.error('Error fetching data:', error));

  searchButton.addEventListener('click', () => {
    const city = searchCityInput.value;
    apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        updateWeather(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  searchCityInput.addEventListener('input', () => {
    const city = searchCityInput.value;
    apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        updateWeather(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  });

  function updateWeather(data) {
    const weatherSideDate = document.querySelector(".c-weather__side-date");
    const weatherSideTemp = document.querySelector(".c-weather__side-temp");
    const weatherSideDesc = document.querySelector(".c-weather__side-description");
    const weatherSideLocation = document.querySelector(".c-weather__today-list");
    const weatherWeekList = document.querySelector(".c-weather__weeklist");

    const current = data.current;
    const location = data.location;
    const forecast = data.forecast.forecastday;

    weatherSideDate.innerHTML = `
      <h2 class="c-weather__side-dayname">${new Date(current.last_updated).toLocaleDateString('en-US', { weekday: 'long' })}</h2>
      <div class="c-weather__side-day">${new Date(current.last_updated).toLocaleDateString()}</div>
      <div class="c-weather__side-location">${location.name}, ${location.country}</div>
    `;
    weatherSideTemp.textContent = `${current.temp_c}°C`;
    weatherSideDesc.textContent = current.condition.text;
    weatherSideLocation.innerHTML = `
    <li class="c-weather__today-item d-flex justify-content-between">
    <div class="c-weather__today-item-title">Precipitation</div>
    <div class="c-weather__today-item-value">${current.precip_mm}%</li>
  
  <li class="c-weather__today-item d-flex justify-content-between">
    <div class="c-weather__today-item-title">Humidity</div>
    <div class="c-weather__today-item-value">${current.humidity}%</div>
  </li>
  
  <li class="c-weather__today-item d-flex justify-content-between">
    <div class="c-weather__today-item-title">Wind</div>
    <div class="c-weather__today-item-value">${current.wind_kph}km/h</div>
  </li>
    
    `
    weatherWeekList.innerHTML = '';
    forecast.forEach(day => {
      const dayName = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });
      weatherWeekList.innerHTML += `
        <li class="c-weather__weeklist-item flex-fill text-center py-4">
          <div class="c-weather__weeklist-item-dayname">${dayName}</div>
          <div class="c-weather__weeklist-item-temperature">${day.day.avgtemp_c}°C</div>
        </li>
      `;
    });
  }
});
