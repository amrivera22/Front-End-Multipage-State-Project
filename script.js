// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form
    const form = document.querySelector('form');

    // Add a submit event listener
    form.addEventListener('submit', (event) => {
        // Get the values of the email fields
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm-email').value;

        // Check if emails match
        if (email !== confirmEmail) {
            alert('The email addresses do not match. Please try again.');
            event.preventDefault(); // Stop form submission
        }
    });
});
