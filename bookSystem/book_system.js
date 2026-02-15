// This array will store all the books added by the user
let books = [];


// This function runs when the "Add Book" button is clicked
function addBook() {

    // Get values entered by the user from input fields
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;

    // Convert pages input from string to number
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Validate that all fields are filled and pagesNumber is a valid number
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {

        // Create a book object using the entered values
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Add the new book object to the books array
        books.push(book);

        // Update the displayed book list
        showbooks();

        // Clear the input fields after adding
        clearInputs();

    } else {

        // If validation fails, show alert
        alert('Please fill in all fields correctly.');
    }
}


// This function displays all books stored in the books array
function showbooks() {

    // map() goes through each book and creates formatted HTML
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );

    // join('') combines all generated HTML into one string
    document.getElementById('books').innerHTML = booksDiv.join('');
}


// This function is called when the Edit button is clicked
// It loads the selected book data back into the form
function editbook(index) {

    const book = books[index];

    // Populate form fields with selected book's data
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Remove the old book entry to avoid duplicate after re-saving
    books.splice(index, 1);

    // Refresh the displayed list
    showbooks();
}


// This function clears all input fields after adding/editing a book
function clearInputs() {

    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
