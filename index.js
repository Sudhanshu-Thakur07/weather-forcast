async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "cb2b3566833a2551580d7072015496f7"; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"eff01f47c0c70cd17c81e886ed576b6a"}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

