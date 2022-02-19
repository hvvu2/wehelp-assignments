// ============ Validation ============ //

const signupForm = document.getElementById("signup-form");
const signupName = document.getElementById("signup-name");
const signupUsername = document.getElementById("signup-username");
const signupPwd = document.getElementById("signup-pwd");
const signupRepwd = document.getElementById("signup-repwd");
const signupBtn = document.getElementById("signup-submit");
const loginForm = document.getElementById("login-form");
const loginUsername = document.getElementById("login-username");
const loginPwd = document.getElementById("login-pwd");
const loginBtn = document.getElementById("login-submit");

// Display error hint and message.
const setError = (e, message) => {
    const inputWrap = e.parentElement; // Select the outer div("input-wrap") of specific input by using .parentElement.
    const errorDisplay = inputWrap.querySelector(".error"); // Select the div("error") correspond to the input on the same indentation level.
    const errorIcon = inputWrap.querySelector("i.error-icon");

    errorDisplay.innerText = message; // Set error message for that input by adding innerText into the div("error").
    inputWrap.classList.add("error");
    errorIcon.classList.add("bx");
    errorIcon.classList.add("bx-x");
    inputWrap.classList.remove("success"); // If the input is incorrect, add class "error" and remove class "success".
};

// Display success hint.
const setSuccess = (e) => {
    const inputWrap = e.parentElement;
    const errorDisplay = inputWrap.querySelector("div.error");
    const errorIcon = inputWrap.querySelector("i.error-icon")

    errorDisplay.innerText=""; // If the input is correct, remove error message.
    inputWrap.classList.add("success"); 
    inputWrap.classList.remove("error");
    errorIcon.classList.remove("bx");
    errorIcon.classList.remove("bx-x");
};

// Validate if the signup-form is fully and correctly filled.
signupForm.addEventListener("submit", (e) => {
    if (signupValidate() == false) {
    e.preventDefault();
    }
});

// Validation of every single input.
const signupValidate = () => {
    const signupNameValue = signupName.value.trim();
    const signupUsernameValue = signupUsername.value.trim();
    const signupPwdValue = signupPwd.value.trim();
    const signupRepwdValue = signupRepwd.value.trim();

    if (signupNameValue === "") {
        setError(signupName, "Please enter your name.");
        signupName.value = "";
    }
    else {
        setSuccess(signupName);
    }

    if (signupUsernameValue === "") {
        setError(signupUsername, "Please enter your username.");
        signupUsername.value = "";
    }
    else {
        setSuccess(signupUsername);
    }

    if (signupPwdValue === "") {
        setError(signupPwd, "Please enter your password.");
        signupPwd.value = "";
    }
    else {
        setSuccess(signupPwd);
    }

    if (signupRepwdValue === "") {
        setError(signupRepwd, "Please confirm your password.");
        signupRepwd.value = "";
    }
    else if (signupRepwdValue != signupPwdValue) {
        setError(signupRepwd, "The password does not match.");
    }
    else {
        setSuccess(signupRepwd);
    }

    if (signupNameValue === "" || signupUsernameValue === "" || signupPwdValue === "" || signupRepwdValue != signupPwdValue) {
        return false;
    }
};

// When users are filling the field, removes current error hint.
signupName.addEventListener("focus", () =>{
    removeErrorTxt(signupName);
});

signupUsername.addEventListener("focus", () => {
    removeErrorTxt(signupUsername);
});

signupPwd.addEventListener("focus", () => {
    removeErrorTxt(signupPwd);
});

signupRepwd.addEventListener("focus", () => {
    removeErrorTxt(signupRepwd);
});

const removeErrorTxt = (e) => {
    const inputWrap = e.parentElement;
    const errorDisplay = inputWrap.querySelector(".error");
    const errorIcon = inputWrap.querySelector("i.error-icon");

    errorDisplay.innerText="";
    inputWrap.classList.remove("error");
    errorIcon.classList.remove("bx");
    errorIcon.classList.remove("bx-x");
};

// When the input is not focused, validate the input immediately and independently.
signupName.addEventListener("blur", () => {
    signupInputValidate(signupName, "Please enter your name.");
});

signupUsername.addEventListener("blur", () => {
    signupInputValidate(signupUsername, "Please enter your username.");
});

signupPwd.addEventListener("blur", () => {
    signupInputValidate(signupPwd, "Please enter your password.");
});

const signupInputValidate = (e, message) => {
    const inputValue = e.value.trim();

    if (inputValue === "") {
        setError(e, message);
        e.value = "";
    }
    else {
        setSuccess(e);
    }
};

// Dynamically validate if the re-password matches the password.
signupRepwd.addEventListener("blur", () => {
    signupRepwdValidate();
});

const signupRepwdValidate = () => {
    const signupPwdValue = signupPwd.value.trim();
    const signupRepwdValue = signupRepwd.value.trim();

    if (signupRepwdValue === "") {
        setError(signupRepwd, "Please confirm your password.");
        signupRepwd.value = "";
    }
    else if (signupRepwdValue != signupPwdValue) {
        setError(signupRepwd, "The password does not match.");
    }
    else {
        setSuccess(signupRepwd);
    }
};

// Validate if the login-form is fully filled
loginForm.addEventListener("submit", (e) => {
    if (loginValidate() == false) {
        e.preventDefault();
    }
});

// Validation of every single input.
const loginValidate = () => {
    const loginUsernameValue = loginUsername.value.trim();
    const loginPwdValue = loginPwd.value.trim();

    if (loginUsernameValue === "") {
        setError(loginUsername, "Please enter your username");
        loginUsernameValue.value = "";
    }

    if (loginPwdValue === "") {
        setError(loginPwd, "Please enter your password");
        loginPwdValue.value = "";
    }

    if (loginUsernameValue === "" || loginPwdValue === "") {
        return false;
    }
};

// When users enter the input, removes current error hint.
loginUsername.addEventListener("focus", () =>{
    removeErrorTxt(loginUsername);
});

loginPwd.addEventListener("focus", () => {
    removeErrorTxt(loginPwd);
});

// Validate the input when the input is not focused. If the field is filled, it remains the default style.
loginUsername.addEventListener("blur", () => {
    loginInputValidate(loginUsername, "Please enter your username.");
});

loginPwd.addEventListener("blur", () => {
    loginInputValidate(loginPwd, "Please enter your password.");
});

const loginInputValidate = (e, message) => {
    const inputValue = e.value.trim();

    if (inputValue === "") {
        setError(e, message);
        e.value = "";
    }
};

// ============ Animation Activation ============ //

// Switch button b/w login and signup.
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const container = document.getElementById("container");

signupButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

