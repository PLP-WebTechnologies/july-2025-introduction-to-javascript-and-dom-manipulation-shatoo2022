// ======================================
// Part 1: Basics (Variables + Conditionals)
// ======================================

// Variable declarations
let userNumber = 7;  // Example number to check
let threshold = 10;  // Example threshold value

// Function to demonstrate conditionals
function checkNumber() {
  let output = "";
  if (userNumber > threshold) {
    output = `${userNumber} is greater than ${threshold}`;
  } else {
    output = `${userNumber} is not greater than ${threshold}`;
  }
  document.getElementById("basic-output").textContent = output;
}


// ======================================
// Part 2: Functions
// ======================================

// Function 1: Calculate a total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Show total using DOM
function showTotal() {
  let total = calculateTotal(50, 3); // Example: $50 × 3
  document.getElementById("function-output").textContent = `Total = $${total}`;
}


// ======================================
// Part 3: Loops
// ======================================

// Example 1: Countdown using for loop
function showCountdown() {
  let list = document.getElementById("loop-output");
  list.innerHTML = ""; // Clear old content

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
}

// Example 2: Array iteration using forEach
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit); // Just logs to console
});


// ======================================
// Part 4: DOM Manipulation
// ======================================

let toggleBtn = document.getElementById("toggle-btn");
let domText = document.getElementById("dom-text");

// Event listener to toggle a CSS class
toggleBtn.addEventListener("click", () => {
  domText.classList.toggle("highlight");  // Add/remove highlight
  domText.textContent = domText.classList.contains("highlight")
    ? "I'm highlighted now!"
    : "Highlight removed!";
});

// Another DOM interaction: dynamically create element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);
