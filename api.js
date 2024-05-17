
const fetchWeatherData = async (city) => {
  cityName.innerHTML = city;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= " + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9fd1c9b748mshd9eb76b69948830p1bae33jsn8156c275566f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(response);
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise
    //sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
};
fetchWeatherData("Delhi");
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchWeatherData(city.value)

});

const selectedCities = ["Gorakhpur", "Pune","Lucknow","Kolkata"];
const selectedWeather = async () => {
  for (let cities of selectedCities) {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cities;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9fd1c9b748mshd9eb76b69948830p1bae33jsn8156c275566f",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      console.log(response);
      // Assuming you have separate elements for each city
      document.getElementById(cities + "_cloud_pct").innerHTML = result.cloud_pct;
      document.getElementById(cities + "_temp").innerHTML = result.temp;
      document.getElementById(cities + "_feels_like").innerHTML = result.feels_like;
      document.getElementById(cities + "_humidity").innerHTML = result.humidity;
      document.getElementById(cities + "_min_temp").innerHTML = result.min_temp;
      document.getElementById(cities + "_max_temp").innerHTML = result.max_temp;
      document.getElementById(cities + "_wind_speed").innerHTML = result.wind_speed;
      document.getElementById(cities + "_wind_degrees").innerHTML = result.wind_degrees;
      document.getElementById(cities + "_sunrise").innerHTML = result.sunrise;
      //document.getElementById(city + "_sunset").innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }
};



selectedWeather();

