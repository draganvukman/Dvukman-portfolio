// Hamburger
let menu = document.querySelector('.mobile-icon');
let navbar = document.querySelector('.header-navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// DOM Elements

var form = document.getElementById('form');
var userName = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

// Form Submit Button
form.addEventListener('submit', function (e) {
  checkInputs();
  if (!check) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

let check = false;

function formData(successRate, count) {
  if (successRate === count) {
    check = true;
  }
}

// After All Success Fields
function successMsg() {
  var formControlAll = document.getElementsByClassName('form-control');
  var count = formControlAll.length - 1;

  for (var i = 0; i < formControlAll.length; i++) {
    if (formControlAll[i].className === 'form-control success') {
      var successRate = 0 + i;
      formData(successRate, count);
      Swal.fire({
        title: 'Success!',
        text: 'Thanks for contacting!',
        icon: 'success',
        showConfirmButton: false,
      });
    } else {
      return false;
    }
  }
}

// Validation Function
function checkInputs() {
  var nameValue = userName.value.trim();
  var emailValue = email.value.trim();
  var messageValue = message.value.trim();

  if (nameValue === '') {
    setErrorFor(userName, 'This is a required field *');
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'This is a required field *');
  } else {
    setSuccessFor(email);
  }

  if (messageValue === '') {
    setErrorFor(message, 'This is a required field *');
  } else {
    setSuccessFor(message);
  }

  successMsg();
}

// Input Error Function
function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

// Input Success Function
function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}
