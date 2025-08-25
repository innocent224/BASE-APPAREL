// Get the element with class
const btn = document.querySelector('.img btn');
const mesError = document.querySelector('.error-mes');
const iconError = document.querySelector('.error-icon');
const input = document.querySelector('.email');

// Declare variables
let valueEmail;
let validEmail;
let checkEmail;

// Apply event to button when click
btn.onclick = () => {
    valueEmail = input.value;
    validEmail = /^[a-z0-9]+@[a-z0-9]+\.(com|vn)$/i;
    checkEmail = validEmail.test(valueEmail);

    if (checkEmail) {
        iconError.style.display = "none";
        mesError.style.display = "none";
    }
    else {
        iconError.style.display = "block";
        mesError.style.display = "block";
    }
}