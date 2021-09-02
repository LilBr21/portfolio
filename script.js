const form = document.getElementById('form');
const firstName = document.getElementById("firstName");
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const errorFirstName = document.getElementById('error-firstName');
const errorSurname = document.getElementById('error-surname');
const errorEmail = document.getElementById('error-email');

form.addEventListener('submit', (event) => {
    let errorFirstNameMessage = [];
    let errorSurnameMessage = [];
    let errorEmailMessage = [];
    
    if (firstName.value == '' || firstName.value == null) {
        errorFirstNameMessage.push("* Name is required");
    }

    if (surname.value == '' || surname.value == null) {
        errorSurnameMessage.push("* Surname is required");
    }

    const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value.match(validMail)) {
        errorEmailMessage.push("* Please enter a valid email");
    }

    if (errorFirstNameMessage.length > 0) {
        event.preventDefault();
        errorFirstName.innerText = errorFirstNameMessage;
    }

    if (errorSurnameMessage.length > 0) {
        event.preventDefault();
        errorSurname.innerText = errorSurnameMessage;
    }

    if (errorEmailMessage.length > 0) {
        event.preventDefault();
        errorEmail.innerText = errorEmailMessage;
    }
})