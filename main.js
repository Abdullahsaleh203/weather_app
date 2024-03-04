const apiKey = "0827b0d8fb95a27f3b4227fb339650f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)


    // searchBox.addEventListener("click", function () {
    //     var city = document.querySelector("#search").value;
    //     checkWeather(city);
    // });

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Cloud") {
        weatherIcon.src = "images/cloudy.png";
    } if else (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    } if else (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    } if else (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    }
    

    // console.log(data)

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})   
