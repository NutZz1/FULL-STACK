const container = document.getElementById('container');
const leftPanel = document.getElementById('leftPanel');
const rightPanel = document.getElementById('rightPanel');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');


function switchToLogin() {
    container.classList.remove('signup-active');
    container.classList.add('login-active');
}


function switchToSignup() {
    container.classList.remove('login-active');
    container.classList.add('signup-active');
}

leftPanel.addEventListener('mouseenter', () => {
    switchToLogin();
});

rightPanel.addEventListener('mouseenter', () => {
    switchToSignup();
});
// container.addEventListener('mouseleave', () => {
//     switchToSignup(); // Default to signup view
// });

/**
 * Toggle password visibility
 * @param {string} inputId - The ID of the password input field
 */
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    
    if (!passwordInput) {
        console.error(`Password input with ID "${inputId}" not found`);
        return;
    }
    
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    const toggleButton = passwordInput.parentElement.querySelector('.password-toggle');
    if (toggleButton) {
        toggleButton.textContent = type === 'password' ? '👁️' : '🙈';
    }
}


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(loginForm);
    const email = formData.get('email') || loginForm.querySelector('input[type="email"]').value;
    const password = formData.get('password') || document.getElementById('loginPassword').value;
    const remember = document.getElementById('remember').checked;
    
    console.log('Login attempt:', {
        email,
        password: '***', 
        remember
    });
    
    alert(`Login successful!\nEmail: ${email}\nRemember me: ${remember}`);
    
    // Optional: Reset form
    // loginForm.reset();
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(signupForm);
    const inputs = signupForm.querySelectorAll('input');
    
    const userData = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        email: inputs[2].value,
        password: document.getElementById('signupPassword').value,
        termsAccepted: document.getElementById('terms').checked
    };
    
    console.log('Signup attempt:', {
        ...userData,
        password: '***'
    });
    
    // Validate terms acceptance
    if (!userData.termsAccepted) {
        alert('Please accept the Terms & Conditions to continue.');
        return;
    }
    
    alert(`Sign up successful!\nWelcome, ${userData.firstName} ${userData.lastName}!`);
    
    // Optional: Reset form
    // signupForm.reset();
});

/**
 * Handle social media login
 * @param {string} provider - The social media provider (google, facebook, twitter)
 */
function socialLogin(provider) {
    console.log(`Attempting to login with ${provider}`);
    
    const providerNames = {
        google: 'Google',
        facebook: 'Facebook',
        twitter: 'Twitter'
    };
    
    alert(`Redirecting to ${providerNames[provider]} authentication...`);
    
    // Example: Redirect to OAuth endpoint
    // window.location.href = `https://auth.example.com/${provider}`;
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * @param {string} password - Password to validate
 * @returns {object} - Object containing validation result and message
 */
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength) {
        return {
            valid: false,
            message: `Password must be at least ${minLength} characters long`
        };
    }
    
    if (!hasUpperCase || !hasLowerCase) {
        return {
            valid: false,
            message: 'Password must contain both uppercase and lowercase letters'
        };
    }
    
    if (!hasNumbers) {
        return {
            valid: false,
            message: 'Password must contain at least one number'
        };
    }
    
    if (!hasSpecialChar) {
        return {
            valid: false,
            message: 'Password must contain at least one special character'
        };
    }
    
    return {
        valid: true,
        message: 'Strong password'
    };
}


const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !isValidEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });
});

const passwordInputs = [
    document.getElementById('loginPassword'),
    document.getElementById('signupPassword')
];

passwordInputs.forEach(input => {
    if (input) {
        input.addEventListener('input', function() {
            const validation = validatePassword(this.value);
            
            if (this.value.length > 0) {
                this.style.borderColor = validation.valid ? '#2ecc71' : '#e74c3c';
            }
        });
    }
});

console.log('BoardMe Auth Page Loaded');
console.log('Available functions:', {
    switchToLogin,
    switchToSignup,
    togglePassword,
    socialLogin,
    isValidEmail,
    validatePassword
});
