let count = 0; // Initialize follower count

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Update display
  checkCountValue(); // Check milestones
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
