// Global variable (accessible anywhere)
const GLOBAL_PREFIX = 'Result:';

// Pure function with parameters & return value
function add(a, b) {
  return a + b;
}

// Function demonstrating local vs. global scope
function makeMessage(name) {
  const localGreeting = 'Hello';            // local variable
  return `${localGreeting}, ${name}!`;
}

// Reusable DOM-toggle function
// Takes an element ID and a class name, returns true/false
function toggleClassById(elementId, className) {
  const el = document.getElementById(elementId);
  if (!el) return false;                    // gracefully handle missing element
  el.classList.toggle(className);
  return true;
}

// Example usage of our pure functions
console.log(GLOBAL_PREFIX, add(5, 7));        // “Result: 12”
console.log(makeMessage('Tonny'));            // “Hello, Tonny!”

// script.js snippet for Part 3

// Re-use toggleClassById from Part 2

// 1) Fade box in/out
document
  .getElementById('animateBoxBtn')
  .addEventListener('click', () => {
    toggleClassById('box', 'visible');
  });

// 2) Flip/unflip the card
document
  .getElementById('flipCardBtn')
  .addEventListener('click', () => {
    toggleClassById('cardInner', 'flipped');
  });

// 3) Show/hide modal
document
  .getElementById('showModalBtn')
  .addEventListener('click', () => {
    toggleClassById('myModal', 'active');
  });

document
  .getElementById('closeModalBtn')
  .addEventListener('click', () => {
    toggleClassById('myModal', 'active');
  });

