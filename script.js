document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('toggle-theme');
    const body = document.body;
    const togglePasswordBtn = document.getElementById('toggle-password');
    const toggleNewPasswordBtn = document.getElementById('toggle-new-password');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const newUsernameField = document.getElementById('new-username');
    const newPasswordField = document.getElementById('new-password');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const loginErrorMessage = document.getElementById('login-error-message');
    const signupErrorMessage = document.getElementById('signup-error-message');
    const loadingIcon = document.getElementById('loading-icon');
    const successMessage = document.getElementById('success-message');
    const loginSuccessMessage = document.getElementById('login-success-message');
    const okButton = document.getElementById('ok-button');
    const loginOkButton = document.getElementById('login-ok-button');
    const toggleFormButton = document.getElementById('toggle-form');
    const toggleLoginButton = document.getElementById('toggle-login');
    const content = document.getElementById('content');

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });

    const togglePasswordVisibility = (inputField, toggleBtn) => {
        const type = inputField.type === 'password' ? 'text' : 'password';
        inputField.type = type;
        toggleBtn.classList.toggle('fa-eye-slash');
    };

    togglePasswordBtn.addEventListener('click', () => {
        togglePasswordVisibility(passwordField, togglePasswordBtn);
    });

    toggleNewPasswordBtn.addEventListener('click', () => {
        togglePasswordVisibility(newPasswordField, toggleNewPasswordBtn);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();
        if (!validateForm(username, password, loginErrorMessage)) return;
        showLoadingIcon();
        setTimeout(() => {
            hideLoadingIcon();
            loginForm.reset();
            showLoginSuccessMessage();
        }, 2000);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = newUsernameField.value.trim();
        const newPassword = newPasswordField.value.trim();
        if (!validateForm(newUsername, newPassword, signupErrorMessage)) return;
        showLoadingIcon();
        setTimeout(() => {
            hideLoadingIcon();
            signupForm.reset();
            showSuccessMessage();
        }, 2000);
    });

    const validateForm = (username, password, errorMessage) => {
        if (username.length < 8 || username.length > 18) {
            showErrorMessage(errorMessage, 'Username must be between 8 and 18 characters');
            return false;
        }
        if (password.length < 8 || password.length > 18) {
            showErrorMessage(errorMessage, 'Password must be between 8 and 18 characters');
            return false;
        }
        hideErrorMessage(errorMessage);
        return true;
    };

    const showErrorMessage = (element, message) => {
        element.textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            hideErrorMessage(element);
        }, 4000); // 4000 milissegundos = 4 segundos
    };
    

    const hideErrorMessage = (element) => {
        element.style.display = 'none';
    };

    const showLoadingIcon = () => {
        content.style.display = 'none';
        loadingIcon.style.display = 'block';
    };

    const hideLoadingIcon = () => {
        loadingIcon.style.display = 'none';
    };

    const showSuccessMessage = () => {
        successMessage.style.display = 'block';
    };

    const showLoginSuccessMessage = () => {
        loginSuccessMessage.style.display = 'block';
    };

    const hideSuccessMessage = () => {
        successMessage.style.display = 'none';
        content.style.display = 'block';
        showLoginContainer();
    };

    const hideLoginSuccessMessage = () => {
        loginSuccessMessage.style.display = 'none';
        content.style.display = 'block';
        showLoginContainer();
    };

    okButton.addEventListener('click', () => {
        hideSuccessMessage();
    });

    loginOkButton.addEventListener('click', () => {
        hideLoginSuccessMessage();
    });

    toggleFormButton.addEventListener('click', () => {
        toggleForm();
    });

    toggleLoginButton.addEventListener('click', () => {
        toggleForm();
    });

    const toggleForm = () => {
        if (loginContainer.style.display === 'none') {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        } else {
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'block';
        }
    };

    const showLoginContainer = () => {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    };
});

