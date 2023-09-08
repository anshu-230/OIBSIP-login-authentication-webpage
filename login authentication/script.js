document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');

    // Simulated user database (replace with a real authentication system)
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        // Add more users as needed
    ];

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the provided username and password match any user in the database
        const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

        if (user) {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = '#00ff00';
            // You can redirect the user to another page or perform other actions here.
        } else {
            loginMessage.textContent = 'Invalid username or password.';
            loginMessage.style.color = '#ff0000';
        }

        // Clear the form inputs
        usernameInput.value = '';
        passwordInput.value = '';
    });
});

