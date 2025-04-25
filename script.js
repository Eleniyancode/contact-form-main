const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const generalEnquiry = document.getElementById("general-enquiry");
const checkbox = document.getElementById("consent-box");
const successMessage = document.getElementById("success-message");

// firstName = "Abdulrahaman";
// lastName = "Ridwan";
// email = "abdulrahamanr657@gmail.com";

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  //stopped default form submission
  event.preventDefault();
  //   console.log("Form submission stopped");
  console.log(email.value, firstName.value, lastName.value);
  //radio button validation
  const selected = document.querySelector('input[name="enquiry"]:checked');

  //email validation
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(regex.test(email));
    return regex.test(email);
  }

  //form field input validation
  if (firstName.value === "") {
    document.getElementById("error-first-name").textContent =
      "This field is required";
  } else if (lastName.value === "") {
    document.getElementById("error-last-name").textContent =
      "This field is required";
    // console.log(lastName);
    // alert("This field is required");
  } else if (email.value === "") {
    document.getElementById("error-email").textContent =
      "This field is required";
  } else if (!validateEmail(email.value)) {
    document.getElementById("error-email").textContent =
      "Please enter a valid email address";
  } else if (!selected) {
    document.getElementById("error-query").textContent =
      "Please select a query type Message";
  } else if (!checkbox.checked) {
    document.getElementById("error-consent").textContent =
      "Please consent to being contacted";
  } else {
    // alert("Form Completed");
    successMessage.style.display = "block";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-last-name").textContent = "";
    document.getElementById("error-first-name").textContent = "";
    document.getElementById("error-query").textContent = "";
    document.getElementById("error-consent").textContent = "";
  }
});
