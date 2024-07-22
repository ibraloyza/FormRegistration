// Function to handle form submission
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Check if the form is valid before submitting
    if (validateForm()) {
        // If valid, show a confirmation message
        alert("Form has been sent!");
        // Reset the form
        document.getElementById("studentForm").reset();
    }
}

// Function to validate form data
function validateForm() {
    // Get values from form fields
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var courses = document.getElementById("courses").value;

    // Check if any field is empty
    if (!fullName || !email || !password || !confirmPassword || !dob || !gender || !courses) {
        alert("Please fill in all fields.");
        return false;
    }

    // Check if the email contains "@"
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass, return true
    return true;
}
