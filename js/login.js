import { Services } from "./service.js";

const email = document.getElementById('email');
const passwords = document.getElementById('password');
const modalButton = document.getElementById('modal-button');
const form = document.getElementById('form');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
form.addEventListener('submit', (e) => {
if (email.value && passwords.value) {
    e.preventDefault();
    const findMyUser = Services.findLoginUser(email.value);
    const forgotPassword = document.getElementById('forgot-password');
    console.log(findMyUser);
    if (findMyUser) {
        if (findMyUser.passwordsValue === passwords.value) {
            window.location.href = 'home.html';
        }
        else {
            passwordError.innerHTML = 'Wrong password';
            forgotPassword.innerHTML = 'forgot password?'
        }
    }
    else {
        emailError.innerHTML = 'No user found';
    }
}
else {
    e.preventDefault();
    passwordError.innerHTML = 'Fill all inputs';
    modalButton.click();
}
});