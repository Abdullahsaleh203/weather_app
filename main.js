const apiKey = "0827b0d8fb95a27f3b4227fb339650f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=cairo";
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid="${apiKey}`);
}
