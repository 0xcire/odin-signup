//check password matching
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
});

function pass() {
  console.log("passwords match, things will now happen");
}

function fail() {
  console.log("passwords don't match. things will not happen");
}

//would also use regex to determine format and validity of phone # if this were to be included in larger project

function checkPassword() {
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#cpassword").value;

  if (password === confirmPassword) {
    pass();
  } else {
    fail();
  }
}

function clearInputs() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
}

document.querySelector(".cta-btn").addEventListener("click", function (e) {
  e.preventDefault();
  checkPassword();
  clearInputs();
});
