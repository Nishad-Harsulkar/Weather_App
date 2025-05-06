const apiKey = 'd4460fbe6eec473e8a3151959250505';

function getWeather() {
  const location = document.getElementById('locationInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (location === "") {
    resultDiv.innerHTML = "Please enter a location.";
    return;
  }

  // Use CORS proxy
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `${proxy}https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found.");
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.current.temp_c;
      const cityName = data.location.name;
      const region = data.location.region;
      resultDiv.innerHTML = `🌡️ Temperature in ${cityName}, ${region} is <strong>${temperature}°C</strong>`;
    })
    .catch(error => {
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
}
