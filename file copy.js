// Get the form element
const form = document.querySelector("form");
fetch('/church-data.json')

// Listen for form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input elements
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const amountInput = document.querySelector("input[name='amount']");

  // Get the values from the input elements
  const name = nameInput.value;
  const email = emailInput.value;
  const amount = amountInput.value;

  // Validate the input values
  if (!name) {
    alert("Please enter your name"); 
    return;
  }

  if (!email) {
    alert("Please enter your email");
    return;
  }

  if (!amount) {
    alert("Please enter a donation amount");
    return;
  }

  // Show a success message
  alert(`Thank you, ${name}, for your donation of $${amount}!`);

  // Clear the form values
  nameInput.value = "";
  emailInput.value = "";
  amountInput.value = "";
});
