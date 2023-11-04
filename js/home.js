
// var userOne = {
//     email: 'emavec2002@gmail.com',
//     name: 'emma',
//     login() {
//         console.log(this.email, 'has logged in')
//     },
//     logout() {
//         console.log(this.email, 'has logged out')
//     }
// }
// console.log(userOne.login())


// // const upt = new 
// class User {
//     constructor() {

//     }
// }

import { Services } from "./service.js";

function sessionData() {
    const siteData = Services.getSession();
    console.log(siteData);
    const modalButton = document.getElementById('modalButton');
    if (siteData) {
        modalButton.click();
    }
    else {
        window.location.href = 'index.html';
    }
}

sessionData()