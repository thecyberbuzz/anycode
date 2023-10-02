// form elements
const forms = {
  login: document.getElementById("login-form"),
  signUp: document.getElementById("sign-up-form"),
  forgotPw: document.getElementById("forgot-pw-form"),
};

// buttons
const buttons = {
  login: document.getElementById("login-btn"),
  signUp: document.getElementById("sign-up-btn"),
  forgotPw: document.getElementById("forgot-pw-btn"),
  cancelPwReset: document.getElementById("cancel-pw-reset-btn"),
};

// inputs
const inputs = {
  loginEmail: document.getElementById("login-email"),
  loginPassword: document.getElementById("login-password"),
  signUpFirstName: document.getElementById("sign-up-first-name"),
  signUpLastName: document.getElementById("sign-up-last-name"),
  signUpEmail: document.getElementById("sign-up-email"),
  signUpPassword: document.getElementById("sign-up-password"),
  signUpPasswordConfirm: document.getElementById("sign-up-password-confirm"),
  forgotPwEmail: document.getElementById("forgot-pw-email"),
};

// switch to the active form
function switchForm(formToRemove, formToAdd) {
  clearInputsAndErrors();
  formToRemove.classList.remove("active");
  setTimeout(() => {
    formToAdd.classList.add("active");
  }, 50);
}

// switch form event listners
buttons.signUp.addEventListener("click", () =>
  switchForm(forms.login, forms.signUp)
);

buttons.forgotPw.addEventListener("click", () =>
  switchForm(forms.login, forms.forgotPw)
);

buttons.cancelPwReset.addEventListener("click", () =>
  switchForm(forms.forgotPw, forms.login)
);

buttons.login.addEventListener("click", () =>
  switchForm(forms.signUp, forms.login)
);

// show and hide error messages
function showError(input, message) {
  const errorMsg = document.getElementById(`${input.id}-error`);
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}

function hideError(input, message) {
  const errorMsg = document.getElementById(`${input.id}-error`);
  errorMsg.textContent = "";
  errorMsg.style.display = "none";
}

// clear inputs and errors when switching between forms
function clearInputsAndErrors() {
  for (const inputKey in inputs) {
    const input = inputs[inputKey];
    input.value = "";
    hideError(input);
  }
}

// validate email
function validateEmail(input) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (input.value.length > 0 && !emailRegex.test(input.value)) {
    showError(input, "Please enter a valid email address");
    return;
  }

  hideError(input);
}

// validate pw is 8 characters or more
function validatePasswordLength(input) {
  if (input.value.length > 0 && input.value.length < 8) {
    showError(input, "Password must be longer than 8 characters");
    return;
  }

  hideError(input);
}

// check passwords match on signup
function validatePasswordsMatch() {
  const password = inputs.signUpPassword.value;
  const passwordConfirm = inputs.signUpPasswordConfirm.value;

  if (password.length >= 8 && passwordConfirm.length > 0) {
    if (password !== passwordConfirm) {
      showError(inputs.signUpPassword, "Passwords do not match!");
      return;
    }

    hideError(inputs.signUpPassword);
  }
}

// check user has entered first/last name on signup
function validateNameField(input) {
  const error = input.id.toLowerCase().includes("first")
    ? "Please enter your first name"
    : "Please enter your last name";
  if (input.value.length === 0) {
    showError(input, error);
    return;
  }

  hideError(input);
}

// use the blur event (when the input loses focus) to check for errors
inputs.loginEmail.addEventListener("blur", () =>
  validateEmail(inputs.loginEmail)
);

inputs.signUpEmail.addEventListener("blur", () =>
  validateEmail(inputs.signUpEmail)
);

inputs.forgotPwEmail.addEventListener("blur", () =>
  validateEmail(inputs.forgotPwEmail)
);

inputs.loginPassword.addEventListener("blur", () =>
  validatePasswordLength(inputs.loginPassword)
);

inputs.signUpPassword.addEventListener("blur", () => {
  validatePasswordLength(inputs.signUpPassword);
  validatePasswordsMatch();
});

inputs.signUpPasswordConfirm.addEventListener("blur", () =>
  validatePasswordsMatch()
);

inputs.signUpFirstName.addEventListener("blur", () =>
  validateNameField(inputs.signUpFirstName)
);

inputs.signUpLastName.addEventListener("blur", () =>
  validateNameField(inputs.signUpLastName)
);
