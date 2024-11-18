// Hardcoded user credentials for demo purposes
const validUsername = "admin";
const validPassword = "password123";

// Function to handle sign-in
function signIn(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Successful login, show the inventory page
        document.getElementById("sign-in-section").style.display = 'none';
        showInventory();
    } else {
        // Invalid credentials, show error message
        document.getElementById("error-message").style.display = 'block';
    }
}

// Attach the signIn function to the form submit event
document.getElementById("sign-in-form").onsubmit = signIn;
