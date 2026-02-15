// Predefined text for typing test
let testText = "The quick brown fox jumps over the lazy dog.";

// Variables to store start and end time
let startTime, endTime;


// Function to start the typing test
function startTest() {

    // Display test sentence
    document.getElementById("inputText").value = testText;

    // Clear previous typing
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    // Clear previous results
    document.getElementById("output").innerHTML = "";

    // Record start time
    startTime = new Date().getTime();
}


// Function to end the typing test and calculate results
function endTest() {

    // Capture end time
    endTime = new Date().getTime();

    // Disable user input after test ends
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed in seconds
    var timeElapsed = (endTime - startTime) / 1000;

    // Get user typed text
    var userTypedText = document.getElementById("userInput").value;

    // Count words using regex (handles multiple spaces properly)
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    // Default WPM value
    var wpm = 0;

    // Calculate WPM safely
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display results dynamically
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}

