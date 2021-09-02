alert('dziala');

const form = document.getElementById('form');
const firstName = document.getElementById("firstName");
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let errorMsgs = [];
    
    if (firstName.value == '' || firstName.value == null) {
        errorMsgs.push("Name is required");
    }

    if (errorMsgs.length > 0) {
        event.preventDefault();
        errorElement.innerText = errorMsgs.join(', ');
    }
})