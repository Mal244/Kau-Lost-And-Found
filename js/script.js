// JS script for every page

// basically, check fields are filled then go home page
function checkLogin() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (email == "" || pass == "") {
    document.getElementById("message").innerHTML = "Please correctly fill in all fields.";
    return false;
  }

  window.location = "index.html";
  return false;
}

// sign up fields are filled and must check passwords match with confirm password then go to login page
function checkPasswords() {
  var pass = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  if (pass != confirm) {
    document.getElementById("message").innerHTML = "Passwords don't match.";
    return false;
  }

  window.location = "login.html";
  return false;
}