// Accessing input field where user types a task
const taskInput = document.getElementById("taskInput");

// Accessing Add Task button
const addTaskBtn = document.getElementById("addTaskBtn");

// Accessing unordered list where tasks will be displayed
const taskList = document.getElementById("taskList");

// Accessing Clear Completed button
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Array to store all tasks
// Each task will be stored as an object
let tasks = [];


/* =====================================================
   Function: addTask()
   Purpose: Add a new task to the tasks array
===================================================== */
function addTask() {

    // Get user input and remove extra spaces
    const taskText = taskInput.value.trim();

    // Only add if input is not empty
    if (taskText !== "") {

        // Push new task object into array
        // completed is initially false
        tasks.push({
            text: taskText,
            completed: false
        });

        // Clear input box after adding task
        taskInput.value = "";

        // Refresh displayed task list
        displayTasks();
    }
}


/* =====================================================
   Function: displayTasks()
   Purpose: Dynamically display all tasks
===================================================== */
function displayTasks() {

    // Clear existing list before re-rendering
    taskList.innerHTML = "";

    // Loop through tasks array
    tasks.forEach((task, index) => {

        // Create new <li> element
        const li = document.createElement("li");

        // Create checkbox + label dynamically
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;

        // Add event listener to checkbox
        // When checkbox changes → toggle task status
        li.querySelector("input")
          .addEventListener("change", () => toggleTask(index));

        // Add list item to <ul>
        taskList.appendChild(li);
    });
}


/* =====================================================
   Function: toggleTask(index)
   Purpose: Mark task as completed / not completed
===================================================== */
function toggleTask(index) {

    // Reverse the completed value (true ↔ false)
    tasks[index].completed = !tasks[index].completed;

    // Re-render task list
    displayTasks();
}


/* =====================================================
   Function: clearCompletedTasks()
   Purpose: Remove all completed tasks
===================================================== */
function clearCompletedTasks() {

    // Keep only tasks that are NOT completed
    tasks = tasks.filter(task => !task.completed);

    // Refresh list after filtering
    displayTasks();
}


/* =====================================================
   Event Listeners
===================================================== */

// When Add Task button is clicked
addTaskBtn.addEventListener("click", addTask);

// When Clear Completed button is clicked
clearCompletedBtn.addEventListener("click", clearCompletedTasks);


// Initial call to render (important if tasks array already has data)
displayTasks();
