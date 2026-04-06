const btn = document.getElementById("btn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailAddress");
const generalEnquiry = document.getElementById("generalEnquiry");
const supportRequest = document.getElementById("supportRequest");
const message = document.getElementById("message");
const agreement = document.getElementById("agreement");

const Alert = document.getElementsByClassName("alert");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", () => {
  let valid = true;

  // nama
  if (firstName.value.trim() === "") {
    Alert[0].style.display = "flex";
    valid = false;
  } else {
    Alert[0].style.display = "none";
  }

  if (lastName.value.trim() === "") {
    Alert[1].style.display = "flex";
    valid = false;
  } else {
    Alert[1].style.display = "none";
  }

  // email check
  const emailValue = email.value.trim();

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    Alert[2].style.display = "flex";
    valid = false;
  } else {
    Alert[2].style.display = "none";
  }

  // query type radio
  if (generalEnquiry.checked || supportRequest.checked) {
    Alert[3].style.display = "none";
  } else {
    Alert[3].style.display = "flex";
    valid = false;
  }

  // message
  if (message.value.trim() === "") {
    Alert[4].style.display = "flex";
    valid = false;
  } else {
    Alert[4].style.display = "none";
  }

  // agreement
  if (!agreement.checked) {
    Alert[5].style.display = "flex";
    valid = false;
  } else {
    Alert[5].style.display = "none";
  }

  if (valid) {
    window.alert("Form berhasil dikirim");
  }

  return valid;
});