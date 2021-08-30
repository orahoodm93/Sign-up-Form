"use strict";

//IF ANY FIELD ELEMENTS ARE EMPTY WHEN THE CLAIM BUTTON HAS BEEN CLICKED,
//1. OUTLINE FORM FIELD WITH RED
//2. SHOW ICON
//3. SHOW MESSAGE BELOW THE SPECIFIC FIELD

const form = document.querySelector("form");
const fnameField = document.querySelector("#fname");
const lnameField = document.querySelector("#lname");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");

//Adds a border, exclamtion icon and message if the user didn't fill the form out correctly
const emptyField = function (specificField, message) {
  specificField.style.border = "1px solid hsl(0, 100%, 74%)";
  specificField.style.background =
    "url('images/icon-error.svg') no-repeat 95% 10px";
  if (specificField === fnameField) {
    const fnameError = document.querySelector("#fnameError");
    fnameError.innerText = message;
  }
  if (specificField === lnameField) {
    const lnameError = document.querySelector("#lnameError");
    lnameError.innerText = message;
  }
  if (specificField === emailField) {
    const emailError = document.querySelector("#emailError");
    emailError.innerText = message;
  }
  if (specificField === passwordField) {
    const passwordError = document.querySelector("#passwordError");
    passwordError.innerText = message;
  }
};

//Checks whether the form is filled out correctly
//Use submit when dealing with a form and e.preventDefault();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fnameField.value === "") {
    emptyField(fnameField, "First name is required");
  } else {
    removeError(fnameField);
  }
  if (lnameField.value === "") {
    emptyField(lnameField, "Last name is required");
  } else {
    removeError(lnameField);
  }
  if (emailField.value === "") {
    emptyField(emailField, "Email is required");
  } else if (!validateEmail(emailField.value)) {
    emptyField(emailField, "Email is not valid");
  } else {
    removeError(emailField);
  }
  if (password.value === "") {
    emptyField(passwordField, "Password is required");
  } else {
    removeError(passwordField);
  }
});

//Tests whether the email is valid or not
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//removes the error if the user fills out the form correctly
function removeError(specificField) {
  specificField.style.border = "1px solid hsl(246, 25%, 77%)";
  specificField.style.background = "none";
  if (specificField === fnameField) {
    const removeErrorfname = document.querySelector("#fnameError");
    removeErrorfname.style.opacity = "0";
  }
  if (specificField === lnameField) {
    const removeErrorlname = document.querySelector("#lnameError");
    removeErrorlname.style.opacity = "0";
  }
  if (specificField === emailField) {
    const removeErroremail = document.querySelector("#emailError");
    removeErroremail.style.opacity = "0";
  }
  if (specificField === passwordField) {
    const removeErrorpassword = document.querySelector("#passwordError");
    removeErrorpassword.style.opacity = "0";
  }
}
