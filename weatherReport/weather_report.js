// Function to fetch and display weather details
function showweatherDetails(event) {
    // Prevent form from refreshing the page
    event.preventDefault();
  
    // Get city value entered by user
    const city = document.getElementById('city').value;
  
    // Your personal API key
    const apiKey = '3fb8fdc83fef443bf62efc95843e883c';
  
    // Correct API URL using city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Fetch weather data from API
    fetch(apiUrl)
      .then(response => {
        // If city not found, throw error manually
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        // Select weatherInfo div
        const weatherInfo = document.getElementById('weatherInfo');
  
        // Display weather details dynamically
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        // Catch errors (wrong city / network issue)
        console.error('Error fetching weather:', error);
  
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
  }
  
  // Attach event listener to form submit
  document.getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);
  