// Function to validate email address
function validateEmail(email) {
    const domain = email.split('@')[1]; // Get the domain part of the email address
    return domain === 'aress.com'; // Check if the domain is "address.com"
  }
  
  // Function to validate password
  function validatePassword(password, firstName, lastName) {
    const hasFirstName = password.toLowerCase().includes(firstName.toLowerCase());
    const hasLastName = password.toLowerCase().includes(lastName.toLowerCase());
    const hasDigits = /\d/.test(password); // Check if password contains at least one digit
    const hasLetters = /[a-zA-Z]/.test(password); // Check if password contains at least one letter
    const hasSpecialChars = /[!@#$%^&*]/.test(password); // Check if password contains at least one special character
  
    return (
      !hasFirstName &&
      !hasLastName &&
      hasDigits &&
      hasLetters &&
      hasSpecialChars
    );
  }
  
  // Function to validate form on submission
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const firstName = document.form[0].firstname.value;
    const lastName = document.form[0].lastname.value;
    const email = document.form[0].email.value;
    const password = document.form[0].password.value;
    const countryCode = document.form[0].phone.value;
  
    if (countryCode === "91") { // Only validate if country code is India (91)
      if (!validateEmail(email)) {
        alert("Email address must have 'address.com' domain.");
        return;
      }
  
      if (!validatePassword(password, firstName, lastName)) {
        alert("Password should not include first name or last name, and should contain at least one digit, one letter, and one special character.");
        return;
      }
    }
  
    // Continue with form submission if validations pass
    // Replace the below line with your actual form submission logic
    alert("Form submitted successfully!");
  }
  
  // Add form submit event listener
  document.querySelector('.form').addEventListener('submit', validateForm);
  