document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
      event.preventDefault(); 
      
      let isValid = true;
      let errorMessages = [];
  
      
      let fullName = document.getElementById("fullName").value.trim();
      if (fullName.length < 3) {
        errorMessages.push("Full Name must be at least 3 characters long.");
        isValid = false;
      }
  
      
      let email = document.getElementById("email").value.trim();
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMessages.push("Enter a valid email address.");
        isValid = false;
      }
  
      
      let dob = document.getElementById("dob").value;
      if (dob) {
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < 18) {
          errorMessages.push("You must be at least 18 years old.");
          isValid = false;
        }
      } else {
        errorMessages.push("Please enter your Date of Birth.");
        isValid = false;
      }
  
      
      let genderSelected = document.querySelector('input[name="gender"]:checked');
      if (!genderSelected) {
        errorMessages.push("Please select your gender.");
        isValid = false;
      }
  
      
      let phone = document.getElementById("phone").value.trim();
      let phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone)) {
        errorMessages.push("Phone number must be a valid 10-digit number.");
        isValid = false;
      }
  
      
      let course = document.getElementById("course").value;
      if (!course) {
        errorMessages.push("Please select a course.");
        isValid = false;
      }
  
      
      let address = document.getElementById("address").value.trim();
      if (address.length < 10) {
        errorMessages.push("Address must be at least 10 characters long.");
        isValid = false;
      }
  
      
      let terms = document.getElementById("terms").checked;
      if (!terms) {
        errorMessages.push("You must agree to the terms and conditions.");
        isValid = false;
      }
  
      
      let errorContainer = document.getElementById("errorMessages");
      let successContainer = document.getElementById("successMessage");
      errorContainer.innerHTML = "";
      successContainer.innerHTML = "";
  
      if (!isValid) {
        errorContainer.innerHTML = errorMessages.join("<br>");
      } else {
        successContainer.innerHTML = "Student successfully enrolled!";
        document.getElementById("enrollmentForm").reset(); 
      }
    });
  });
  