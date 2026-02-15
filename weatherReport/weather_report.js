// Function to fetch and display weather details
function showweatherDetails(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get city entered by user
    const city = document.getElementById('city').value;

    // Your personal API key
    const apiKey = '3fb8fdc83fef443bf62efc95843e883c';

    // API URL using city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data using Fetch API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            const weatherInfo = document.getElementById('weatherInfo');

            // If city not found
            if (data.cod !== 200) {
                weatherInfo.innerHTML = `<p style="color:red;">City not found. Please try again.</p>`;
                return;
            }

            // Display weather details
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML =
                `<p style="color:red;">Error fetching data. Please try again.</p>`;
        });
}

// Attach event listener to form
document.getElementById('weatherForm')
        .addEventListener('submit', showweatherDetails);
