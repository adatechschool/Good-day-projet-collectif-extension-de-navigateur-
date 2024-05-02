const apiKey = "0d25d8930adb2107b9b213b3a14dbc25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }
}

let clickButton = searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
let pressTouch = searchBox.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 13) checkWeather(searchBox.value);
})


// KeyboardEvent: key='Enter' | code='Enter'

// if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
//     // Empêcher le rechargement de la page (si le bouton est dans un formulaire)
//     event.preventDefault();
// }
// jQuery(function ($) {
//     let t = ${('#test');
//     t.on('keyup', function (e) {
//         if (e.keyCode == 13)
//     });
// });


checkWeather()
