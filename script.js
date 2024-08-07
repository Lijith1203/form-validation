document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('registrationForm');

    // Add event listener to the form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous errors
        clearErrors();

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validate form fields
        let isValid = true;

        if (!validateFullName(fullName)) {
            isValid = false;
        }

        if (!validateEmail(email)) {
            isValid = false;
        }

        if (!validatePhone(phone)) {
            isValid = false;
        }

        if (!validatePassword(password, fullName)) {
            isValid = false;
        }

        if (!validateConfirmPassword(password, confirmPassword)) {
            isValid = false;
        }

        if (isValid) {
            // If form is valid, submit form or show success message
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Clear error messages
    function clearErrors() {
        document.getElementById('fullNameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
    }

    // Validate Full Name
    function validateFullName(fullName) {
        if (fullName.length < 5) {
            document.getElementById('fullNameError').textContent = 'Full Name must be at least 5 characters long.';
            return false;
        }
        return true;
    }

    // Validate Email
    function validateEmail(email) {
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = 'Enter a valid email address.';
            return false;
        }
        return true;
    }

    // Validate Phone
    function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;
        if (phone === '1234567890' || !phoneRegex.test(phone)) {
            document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number (not 1234567890).';
            return false;
        }
        return true;
    }

    // Validate Password
    function validatePassword(password, fullName) {
        if (password.length < 8 || password === 'password' || password === fullName) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and cannot be "password" or your full name.';
            return false;
        }
        return true;
    }

    // Validate Confirm Password
    function validateConfirmPassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            return false;
        }
        return true;
    }
});
