// 

// const validInput = () => {
//     const name = document.forms["contactForm"]["name"];
//     const email = document.forms["contactForm"]["email"];
//     const message = document.forms["contactForm"]["message"];

//     if (name.value == "") {
//         name.setCustomValidity("Can't be empty");
//         name.reportValidity();
//     }
//     if (email.value == "") {
//         email.setCustomValidity("Can't be empty");
//         email.reportValidity();
//     }
//     if (message.value == "") {
//         message.setCustomValidity("Can't be empty");
//         message.reportValidity();
//     }
// }

const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) => {
    // let messages = 0;
    if(userName.validity.valueMissing) {
        userName.setCustomValidity("Can't be empty");
        return;
        // userName.reportValidity();
        // e.preventDefault();
    } else {
        userName.setCustomValidity("");
    }

    // if (messages !== 0) {
    //     e.preventDefault();
    //     // errorElement.innerText = messages.join(', ')
    // }
   
})


const one = userName.setCustomValidity("no no");
const two = userName.setCustomValidity("yeah");

 const tryMsg = (input) =>{
     if (input.value == "") {}
     input.setCustomValidity('');

}