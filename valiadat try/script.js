document.getElementById('registration-form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var countryCode = document.getElementById('mobile-country-code').value;
    var mobileNumber = document.getElementById('mobile-number').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var valid = true;
  
    // Validate mobile country code
    if (countryCode !== '91') {
      valid = false;
      alert('Mobile country code should start with +91 for India');
    }
  
    // Validate email domain
    if (!email.endsWith('@aress.com')) {
      valid = false;
      alert('Email should have domain aress.com');
    }
  
    // Validate password
    if (password.includes(firstName) || password.includes(lastName)) {
      valid = false;
      alert('Password should not contain first name or last name');
    }
  
    if (!/[0-9]/.test(password) || !/[a-zA-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      valid = false;
      alert('Password should contain at least one number, letter, and special character');
    }
  
    if (password !== confirmPassword) {
      valid = false;
      alert('Passwords do not match');
    }
  
    if (!valid) {
      event.preventDefault();
    }
  });

  window.onload = function() {
    var form = document.getElementById("registration-form");
    var startDateInput = document.getElementById("start-date");
    var endDateInput = document.getElementById("end-date");
    var policyAcceptedInput = document.getElementById("policy-accepted");
    var submitButton = document.querySelector('input[type="submit"]');
  
    function validateDates() {
      var startDate = new Date(startDateInput.value);
      var endDate = new Date(endDateInput.value);
      if (startDate >= endDate) {
        endDateInput.setCustomValidity("End date must be greater than start date.");
      } else {
        endDateInput.setCustomValidity("");
      }
    }
  
    function toggleSubmitButton() {
      submitButton.disabled = !policyAcceptedInput.checked;
    }
  
    startDateInput.addEventListener("change", validateDates);
    endDateInput.addEventListener("change", validateDates);
    policyAcceptedInput.addEventListener("change", toggleSubmitButton);
  };
  
  