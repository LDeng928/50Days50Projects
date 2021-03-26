// bring in the toggle buttons
const buttons = document.querySelectorAll(".faq-toggle");
console.log(buttons);

// loop through the nodelist
// add an event listener to each button
// use parentNode to add the class 'active'
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
