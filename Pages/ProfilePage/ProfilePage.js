// TextEdit Variables
const EmailEdit__Text = document.querySelector(".Edit__emailText");
const PasswordEdit__Text = document.querySelector(".Edit__passwordText");
const EmailEdit__Content = document.querySelector(".Email__Confirm");
const PasswordEdit__Content = document.querySelector(".Password__Confirm");
const Password__Input = document.querySelector("#Password__Edit");
const Email__Input = document.querySelector("#Email__Edit");
const Email__Confirm = document.querySelector("#Email__Confirm");
const UserName__Input = document.querySelector("#Username__Edit");
const SubmitBtn = document.querySelector(".SubmitBtn");
const Password__Errors = document.querySelector(".Password__Errors");
const NewEmail__Error = document.querySelector(".NewEmailError");

const user = JSON.parse(localStorage.getItem("loginUser"));

const errorMessages = {
    length: "Password must be at least 8 characters",
    uppercase: "Password must contain at least one uppercase letter",
    number: "Password must contain at least one number",
};

Email__Input.value = user.email;
UserName__Input.value = user.username || "";

let emailEdited = false; // Flag to track if email is being edited

EmailEdit__Text.addEventListener("click", () => {
    Email__Input.disabled = false;
    EmailEdit__Content.style.display = "block";
    emailEdited = true; // Mark that email is being edited
});

PasswordEdit__Text.addEventListener("click", () => {
    Password__Input.disabled = false;
    PasswordEdit__Content.style.display = "block";
});

const OldPasswordVerification = (password) => {
    if (user.password === password) {
        Password__Input.style.borderColor = "rgb(15, 163, 15)";
        return true;
    } else {
        Password__Input.style.borderColor = "red";
        alert("Your current password is incorrect.");
        return false;
    }
};

const NewPasswordVerification = (newPassword) => {
    let PasswordErrors = [];

    if (newPassword.length < 8) {
        PasswordErrors.push(errorMessages.length);
    }
    if (!/[A-Z]/.test(newPassword)) {
        PasswordErrors.push(errorMessages.uppercase);
    }
    if (!/\d/.test(newPassword)) {
        PasswordErrors.push(errorMessages.number);
    }

    displayPassErrors(PasswordErrors);
    return PasswordErrors.length === 0;
};

const NewEmailVerification = (email) => {
    if (email === "") {
        NewEmail__Error.textContent = "Email is required";
        Email__Confirm.style.borderColor = "red";
        return false;
    } else {
        const ExistantEmail = localStorage.getItem(email);
        if (ExistantEmail && email !== user.email) {
            NewEmail__Error.textContent = "Email already exists";
            Email__Confirm.style.borderColor = "red";
            return true;
        }
        Email__Confirm.style.borderColor = "rgb(15, 163, 15)";
        NewEmail__Error.textContent = "";
        return false;
    }
};

const displayPassErrors = (errors) => {
    Password__Errors.innerHTML = "";
    errors.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        Password__Errors.appendChild(li);
    });
};

SubmitBtn.addEventListener("click", () => {
    const currentPassword = Password__Input.value;
    const newPasswordValue = document.querySelector("#Password__Confirm").value;
    // Check if email was edited, otherwise use current email from user object
    const newEmailValue = emailEdited ? Email__Confirm.value.trim().toLowerCase() : user.email;

    const isOldPassValid = OldPasswordVerification(currentPassword);
    const isNewPassValid = NewPasswordVerification(newPasswordValue);
    const isNewEmailValid = NewEmailVerification(newEmailValue);

    if (isOldPassValid && isNewPassValid && !isNewEmailValid) {
        const updatedUser = {
            username: UserName__Input.value.trim(),
            email: newEmailValue,
            password: newPasswordValue
        };

        // Remove old email from localStorage if changed
        if (user.email !== newEmailValue) {
            localStorage.removeItem(user.email);
        }

        // Update in localStorage
        localStorage.setItem("loginUser", JSON.stringify(updatedUser));
        localStorage.setItem(newEmailValue, JSON.stringify(updatedUser)); // Store with new email as key

        alert("User updated successfully.");
        window.location.reload()
    }
});
