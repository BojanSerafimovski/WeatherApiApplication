//if the api could not load the data visit this link in order to active your own key:https://openweathermap.org/api

//fetching the weather data for the city/state/continent from the API
let weather = {
    "apiKey": "b766ea6479f1a6c5349e716fb54a4495",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    //extracting the data from the api for the searched object
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //displaying the extracted data to the user
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".weather_icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weather_description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".weather_humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".weather_wind").innerText = "Wind Speed: " + speed + "km/h";
        //while the data is loading from the api display a loading effect
        document.querySelector(".weather_container").classList.remove("loading");
        //display a random background-image from unsplash depending on the weather description
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
    },
    //the function that has the task to display the weather for the value inserted in the search bar
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

//enabling the users to search by clicking on the search icon for a city/state/continent to check the current weather conditions
document.querySelector(".search_container i").addEventListener("click", function () {
    weather.search();
});
//enabling the searching also with pressing the key ENTER and not only with the search icon
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
//fetching the weather conditions in Skopje as a startup property
weather.fetchWeather("Skopje");
