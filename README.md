# Weather_App
API Intregration and API Learning Project, API Testing

# ⚠️ Note on CORS and WeatherAPI

Due to CORS (Cross-Origin Resource Sharing) restrictions enforced by modern browsers, the WeatherAPI may block direct client-side requests from public frontend environments such as GitHub Pages.
This means that if you try to fetch weather data directly from the browser (using JavaScript on GitHub Pages), the request may fail with a “CORS error” before even reaching the API server.
To bypass this during development or testing, you can use a CORS proxy like:
## For Temporary Demo
https://cors-anywhere.herokuapp.com/corsdemo
⚠️ Important: This proxy is meant for temporary/demo use only. For production apps, it's recommended to handle API requests from a secure backend server to avoid exposing your API key and to stay compliant with WeatherAPI's usage policies.
