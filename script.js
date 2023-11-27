document.addEventListener("DOMContentLoaded", function () {
    // Form submission event listener
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields before submission
        if (validateForm()) {
            // You can add code here to send the form data to your server
            alert("Form submitted successfully!"); // For demonstration purposes
            form.reset(); // Reset the form after submission
        }
    });

    // Function to validate form fields
    function validateForm() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!username || !email || !phone || !message) {
            alert("Please fill out all required fields.");
            return false;
        }

        // You can add more advanced validation here if needed

        return true;
    }
});
