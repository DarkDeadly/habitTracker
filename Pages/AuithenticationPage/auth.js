// Slider Variables
const slider = document.querySelector('.auth-slider');
const tosignIN = document.querySelector('.to__SignIn');
const tosignUp = document.querySelector('.to__SignUp');

// SignUp Variables
const Register__Button = document.querySelector('.Register__btn');
const PassConfirm__Error = document.querySelector(".PassConfirm__Error");
const Password__Errors = document.querySelector(".Password__Errors");
const Email__Error = document.querySelector(".Email__Error"); 
const signUpEmailInput = document.querySelector("#SignUp__Email");
const signUpPasswordInput = document.querySelector("#SignUp__Password");
const passwordConfirmInput = document.querySelector("#Password__confirmation");

// SignIn Variables
const SignIn__button = document.querySelector(".SignIN__Button");
const SignInEmail__Error = document.querySelector(".SignInEmail__Error");
const SignInPass__Error = document.querySelector(".SignInPassword__Error");
const SignIN__Email = document.querySelector("#SignIn__Email");
const SignIN__Password = document.querySelector("#SignIn__Password");


//Showcase Elements Variable 
const DashboardLink = document.querySelector(".Dashboard__Nav")
const Logout__Btn = document.querySelector(".Logout__Btn")

// Error messages
const errorMessages = {
    length: "Password must be at least 8 characters",
    uppercase: "Password must contain at least one uppercase letter",
    number: "Password must contain at least one number",
    email: "Invalid email format",
    mismatch: "Passwords do not match",
    emailExistance: "The email does exist",
    emailError: "We couldn't find an account with that email address",
    passwordError: "The password you entered is incorrect"
};

// Display password errors
const displayPassErrors = (errors) => {
    Password__Errors.innerHTML = "";
    errors.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        Password__Errors.appendChild(li);
    });
};

// SignIn Verification logic moved to separate function
const SignInVerification = (email, password) => {
    const EmailExistance = localStorage.getItem(email);

    if (!EmailExistance) {
        SignInEmail__Error.textContent = errorMessages.emailError; 
        SignIN__Email.style.borderColor = "red";
        return false;
    } else {
        SignIN__Email.style.borderColor = "rgb(15, 163, 15)";
    }

    const userData = JSON.parse(EmailExistance);
    if (userData.password === password) {
        SignIN__Password.style.borderColor = "rgb(15, 163, 15)";
        alert("Login Successful");
        localStorage.setItem("loginUser", JSON.stringify(userData));
        return true;
    } else {
        SignInPass__Error.textContent = "Incorrect password.";
        SignIN__Password.style.borderColor = "red";
        return false;
    }
};

// Real-time password validation
const PasswordVerification = (signUp_Password) => {
    let PasswordErrors = [];

    if (signUp_Password.length < 8) {
        PasswordErrors.push(errorMessages.length);
    }
    if (!/[A-Z]/.test(signUp_Password)) {
        PasswordErrors.push(errorMessages.uppercase);
    }
    if (!/\d/.test(signUp_Password)) {
        PasswordErrors.push(errorMessages.number);
    }

    displayPassErrors(PasswordErrors); // Show errors in the Password__Errors div
    return PasswordErrors.length === 0;  // Return true if no errors
};

// Password confirmation validation
const passwordConfirmationVerification = (signUp_Password, Password__Confirmation) => {
    if (signUp_Password !== Password__Confirmation) {
        PassConfirm__Error.textContent = errorMessages.mismatch;
        passwordConfirmInput.style.borderColor = "red";
        return false;
    } else {
        PassConfirm__Error.textContent = "";
        passwordConfirmInput.style.borderColor = "rgb(15, 163, 15)";
        return true;
    }
};

// Real-time email validation
const emailVerification = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EmailExistance = localStorage.getItem(email); 

    // Check if the email format is invalid
    if (!emailRegex.test(email)) {
        Email__Error.textContent = errorMessages.email; 
        return false;
    } else {
        Email__Error.textContent = "";

        // Check if the email already exists in localStorage
        if (EmailExistance !== null) {
            Email__Error.textContent = errorMessages.emailExistance; 
            signUpEmailInput.style.borderColor = "red";
            return false;
        }
        signUpEmailInput.style.borderColor = "rgb(15, 163, 15)";
        return true;
    }
};

// Update Register button state based on validations
const updateRegisterButtonState = () => {
    const email = signUpEmailInput.value;
    const pass = signUpPasswordInput.value;
    const confirm = passwordConfirmInput.value;

    const isEmailValid = emailVerification(email);
    const isPasswordValid = PasswordVerification(pass);
    const isConfirmValid = passwordConfirmationVerification(pass, confirm);

    // Disable or enable Register button based on validation results
    Register__Button.disabled = !(isEmailValid && isPasswordValid && isConfirmValid);
};

// SignUp form validation on submit
const SignUpVerification = (event) => {
    event.preventDefault();

    const email = signUpEmailInput.value;
    const pass = signUpPasswordInput.value;
    const confirm = passwordConfirmInput.value;

    // Perform all validation checks
    const isEmailValid = emailVerification(email);
    const isPasswordValid = PasswordVerification(pass);
    const isPasswordConfirmed = passwordConfirmationVerification(pass, confirm);

    if (isEmailValid && isPasswordValid && isPasswordConfirmed) {
        const user = {
            email: email,
            password: pass
        };
        localStorage.setItem(user.email, JSON.stringify(user));
        console.log("submitted successfully");
    } else {
        console.log("Form submission failed due to validation errors.");
    }
};

// Event listener for Register button
Register__Button.addEventListener("click", (event) => {
    SignUpVerification(event);
});

// Event listener for SignIn button
SignIn__button.addEventListener("click", () => {
   
    SignInVerification(SignIN__Email.value, SignIN__Password.value);
    window.location.reload();

});


// Event listeners for real-time input validation
["input", "keyup"].forEach(eventType => {
    [signUpEmailInput, signUpPasswordInput, passwordConfirmInput].forEach(input => {
        input.addEventListener(eventType, updateRegisterButtonState);
    });
});
document.addEventListener("DOMContentLoaded" , () => {
    const isLoggedIn = localStorage.getItem("loginUser")

    if (!isLoggedIn) {
        DashboardLink.style.display = "none" 
        Logout__Btn.style.display = "none"
    }else {
        DashboardLink.style.display = "block"
        Logout__Btn.style.display = "block"
    }
})
// Slider animation for switching between SignIn/SignUp
tosignUp.addEventListener("click", () => {
    slider.style.transform = 'translateX(-50%)';
});
tosignIN.addEventListener("click", () => {
    slider.style.transform = 'translateX(0%)';
});


Logout__Btn.addEventListener("click" , () => {
    localStorage.removeItem("loginUser")
    window.location.reload();

})