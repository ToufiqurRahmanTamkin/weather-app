document.getElementById("search-btn").addEventListener("click", () => {
  const inputLocation = document.getElementById("input-location").value;
  weatherUpdate(inputLocation);
  localStorageData(inputLocation);
  localStorage.setItem("prev-search", inputLocation);
});

function weatherUpdate(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3c6dbc40935f3338dc462cd8252aec2&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temperature").innerText = data.main.temp;
      document.getElementById("location").innerText = data.name;
      document.getElementById("weather").innerText = data.weather[0].main;
      document.getElementById(
        "image"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("main-container").style.border = "2px solid #FFF";
      document.getElementById("maximum").innerText =
        "Maximum temperature " + data.main.temp_max;
      document.getElementById("minimum").innerText =
        "Minimum temperature " + data.main.temp_min;
    })
    .catch((error) => console.log(error));
}

function localStorageData(value) {
  let searchItem = localStorage.getItem("prev-search", value);
  document.getElementById("title").innerHTML = "Previous searched-";
  document.getElementById("country").innerHTML = searchItem;
}
