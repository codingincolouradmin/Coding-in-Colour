var form = document.getElementById("myForm");

// var myForm = document.forms["myForm"];
// var anotherForm = document.forms["myForm2"];

var nameInput = document.getElementById("id_name");
var emailInput = document.getElementById("id_email");
var phoneInput = document.getElementById("id_phone");
var messageInput = document.getElementById("id_message");
var checkInput = document.getElementById("id_check");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameValue = nameInput.value;
  var emailValue = emailInput.value;
  var phoneValue = phoneInput.value;
  var messageValue = messageInput.value;
  var checkValue = checkInput.value;

  document.getElementById("name_output").textContent = nameValue;
  document.getElementById("email_output").textContent = emailValue;
  document.getElementById("phone_output").textContent = phoneValue;
  document.getElementById("message_output").textContent = messageValue;
  document.getElementById("check_output").textContent = checkValue;
});

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   var nameValue = nameInput.value;
//   var emailValue = emailInput.value;

//   document.getElementById("nameOutput").innerHTML = nameValue;
// });

function validateForm() {
  var emailInput = document.getElementById("email");

  var email = emailInput.value;

  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    var emailError = document.getElementById("emailError");
    emailError.innerHTML = "Invalid email address";
    return false;
  } else {
    var emailError = document.getElementById("emailError");
    emailError.innerHTML = "";
    return true;
  }
}
