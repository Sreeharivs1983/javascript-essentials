// Function triggered when user clicks the "Perform Operation" button
function performOperation() {

    // Get user input from input fields and convert them into integers
    // parseInt converts string input into number
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if both inputs are valid numbers
    // isNaN() checks if the value is Not a Number
    if (!isNaN(num1) && !isNaN(num2)) {

        // Call multiply function and store result
        let result = multiply(num1, num2);

        // Display the result
        displayResult(result);

    } else {

        // If inputs are invalid, show error message
        displayResult('Please enter valid numbers');
    }
}


// Function to multiply two numbers
function multiply(a, b) {

    // debugger statement pauses execution when DevTools is open
    // This helps inspect variables and step through code
    debugger;

    // Multiply numbers and return result
    return a * b;
}


// Function to display result on webpage
function displayResult(result) {

    // Get paragraph element where result will be shown
    const resultElement = document.getElementById('result');

    // Update text content dynamically
    resultElement.textContent = `The result is: ${result}`;
}
