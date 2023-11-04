import { Services } from "./service.js";

const names = document.getElementById('names');
const email = document.getElementById('email');
const passwords = document.getElementById('password');
const retryPassword = document.getElementById('retry-password');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    // form error validation function
    function validation() {
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const retryPasswordError = document.getElementById('retry-password-error');


        // name validation process 
        let nameResult = '';
        if (names.value) {
            nameError.innerHTML = '';
            nameResult = true;
        }
        else {
            nameError.innerHTML = 'Enter your name';
            nameResult = false;
        }

        // email validation process 
        let emailResult = '';
        if (email.value) {
            emailError.innerHTML = '';
            emailResult = true;
        }
        else {
            emailError.innerHTML = 'Enter your email';
            emailResult = false;
        }

        // password validation process 
        let passwordResult = '';
        if (passwords.value.length === 0) {
            passwordError.innerHTML = 'Please insert your password';
            passwordResult = false;
        }
        else {
            if (passwords.value.length < 15 && passwords.value.length > 0 && passwords.value.length > 7) {
                passwordError.innerHTML = '';
                passwordResult = true;
            }
            else {
                passwordError.innerHTML = 'Password must be min: 8 max: 15.';
                passwordResult = false;
            }
        }
        
        let retryPasswordResult = '';
        if (passwordResult === true && retryPassword.value === passwords.value) {
            retryPasswordError.innerHTML = '';
            retryPasswordResult = true;
        }
        else {
            retryPasswordError.innerHTML = 'Incorrect password';
            retryPasswordResult = false;
        }

        const myFormValidation = [
            nameResult,
            emailResult,
            passwordResult,
            retryPasswordResult
        ]
        return myFormValidation;
    }

    // form Processing function
    function formProcessing() {
        const modalButton = document.getElementById('modal-button');
        const namesValue = names.value;
        const emailValue = email.value;
        const passwordsValue = passwords.value;
        const retryPasswordValue = retryPassword.value;
    
        const inputs = {
            namesValue,
            emailValue,
            passwordsValue,
            retryPasswordValue
        }
        const myValidation = validation();
        if (myValidation[0] && myValidation[1] && myValidation[2] && myValidation[3]) {
            Services.storeUser(inputs);
            Services.storeSession(inputs);
            e.preventDefault();
            const findMyUser = Services.findSigninUser(email.value);
            console.log(findMyUser)
            if (names.value === findMyUser.emailValue) {
                e.preventDefault()
                nameError.innerHTML = 'User already exist';
            }
            else {
                // window.location.href = 'home.html';
                e.preventDefault()
            }
        }
        else {
            e.preventDefault();
            modalButton.click();
        }
    }
    formProcessing();
        
    const localData = Services.getUser();
    console.log(localData);
});