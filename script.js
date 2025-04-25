const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const message = document.getElementById("message");
// const generalEnquiry = document.getElementById("general-enquiry");
const checkbox = document.getElementById("consent-box");
const successMessage = document.getElementById("success-message");

// firstName = "Abdulrahaman";
// lastName = "Ridwan";
// email = "abdulrahamanr657@gmail.com";

const supportRequest = document.getElementById("support-request");
const supportRequestCheckbox = document.getElementById(
  "support-request-checkbox"
);
supportRequest.addEventListener("click", () => {
  supportRequestCheckbox.style.borderBlockColor = "hsl(169, 82%, 27%)";
  supportRequestCheckbox.style.borderInlineColor = "hsl(169, 82%, 27%)";
  supportRequestCheckbox.style.backgroundColor = "hsl(148, 38%, 91%)";
  console.log("selected");
});

const generalEnquiry = document.getElementById("general-enquiry");
const generalEnquiryCheckbox = document.getElementById(
  "general-enquiry-checkbox"
);
generalEnquiry.addEventListener("click", () => {
  generalEnquiryCheckbox.style.borderBlockColor = "hsl(169, 82%, 27%)";
  generalEnquiryCheckbox.style.borderInlineColor = "hsl(169, 82%, 27%)";
  generalEnquiryCheckbox.style.backgroundColor = "hsl(148, 38%, 91%)";
  console.log("selected");
});

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
    firstName.style.borderBlockColor = "red";
    firstName.style.borderInlineColor = "red";
  } else if (lastName.value === "") {
    document.getElementById("error-last-name").textContent =
      "This field is required";
    lastName.style.borderBlockColor = "red";
    lastName.style.borderInlineColor = "red";
    // console.log(lastName);
    // alert("This field is required");
  } else if (email.value === "") {
    document.getElementById("error-email").textContent =
      "This field is required";
    email.style.borderBlockColor = "red";
    email.style.borderInlineColor = "red";
  } else if (!validateEmail(email.value)) {
    document.getElementById("error-email").textContent =
      "Please enter a valid email address";
    email.style.borderBlockColor = "red";
    email.style.borderInlineColor = "red";
  } else if (!selected) {
    document.getElementById("error-query").textContent =
      "Please select a query type Message";
    generalEnquiry.style.borderBlockColor = "red";
    generalEnquiry.style.borderInlineColor = "red";
  } else if (message.value === "") {
    document.getElementById("error-message").textContent =
      "This field is required";
    message.style.borderBlockColor = "red";
    message.style.borderInlineColor = "red";
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
