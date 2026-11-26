// JS script for every page

// basically, check fields are filled then go home page
function checkLogin() {
  var pass = document.getElementById("password").value;
  var errors = 0;

  if (checkEmail() == false) {
    errors = errors + 1;
  }

  if (pass.length < 8) {
    showError("password", "passwordMsg", "Password must be at least 8 characters.");
    errors = errors + 1;
  } else {
    showOk("password", "passwordMsg");
  }

  if (errors > 0) {
    document.getElementById("message").innerHTML = "Please correctly fill in all fields.";
    return false;
  }

  window.location = "index.html";
  return false;
}

// sign up fields are filled and must check passwords match with confirm password then go to login page
function checkPasswords() {
  var errors = 0;

  if (checkName() == false) {
    errors = errors + 1;
  }
  if (checkStudentId() == false) {
    errors = errors + 1;
  }
  if (checkEmail() == false) {
    errors = errors + 1;
  }
  if (checkPass() == false) {
    errors = errors + 1;
  }
  if (checkConfirm() == false) {
    errors = errors + 1;
  }
  
  if (errors > 0) {
    document.getElementById("message").innerHTML = "Please correctly fill in all fields.";
    return false;
  }

  window.location = "login.html";
  return false;
}

// shows a red message for error
function showError(inputId, msgId, text) {
  document.getElementById(msgId).innerHTML = text;
  document.getElementById(msgId).style.color = "red";
  document.getElementById(inputId).style.border = "2px solid red";
}

// makes border green for ok
function showOk(inputId, msgId) {
  document.getElementById(msgId).innerHTML = "";
  document.getElementById(inputId).style.border = "2px solid green";
}

// name must be at least 3 characters
function checkName() {
  var name = document.getElementById("name").value;

  if (name.length < 3) {
    showError("name", "nameMsg", "Please enter your full name.");
    return false;
  }

  showOk("name", "nameMsg");
  return true;
}

// student id must be 7 numbers, loop checks every character is a number
function checkStudentId() {
  var id = document.getElementById("studentid").value;
  var onlyNumbers = true;

  for (var i = 0; i < id.length; i++) {
    if (id.charAt(i) < "0" || id.charAt(i) > "9") {
      onlyNumbers = false;
    }
  }

  if (id.length != 7 || onlyNumbers == false) {
    showError("studentid", "studentidMsg", "Student ID must be 7 numbers.");
    return false;
  }

  showOk("studentid", "studentidMsg");
  return true;
}

function checkEmail() {
  var email = document.getElementById("email").value;

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    showError("email", "emailMsg", "Please enter a valid email.");
    return false;
  }

  showOk("email", "emailMsg");
  return true;
}

// password must be at least 8 characters
function checkPass() {
  var pass = document.getElementById("password").value;

  if (pass.length < 8) {
    showError("password", "passwordMsg", "Password must be at least 8 characters.");
    return false;
  }

  showOk("password", "passwordMsg");
  return true;
}

// confirm password must match the password
function checkConfirm() {
  var pass = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  if (pass != confirm || confirm == "") {
    showError("confirm", "confirmMsg", "Passwords don't match. Please confirm that passwords do match");
    return false;
  }

  showOk("confirm", "confirmMsg");
  return true;
}