let validateEmail = (email) => {
    if(email.length == 0 || !email.includes('@') || !email.endsWith(".com")) return false;

    return true;
}

let validatePassword = (password) => {
    if(password.length == 0) return false;

    return true;
}


const loginForm = document.getElementById("loginFormId");

loginForm.addEventListener("submit", (e) => {

    let validEmail = true;
    let validPassword = true;

    e.preventDefault();

    const email = document.getElementById("inputLoginEmail");

    if(!validateEmail(email.value)){
        email.nextElementSibling.classList.add("show-text");
        validEmail = false;
    } else {
        email.nextElementSibling.classList.remove("show-text");
    }

    const password = document.getElementById("inputLoginPassword");

    if(!validatePassword(password.value)){
        password.nextElementSibling.classList.add("show-text");
        validPassword = false;
    } else {
        password.nextElementSibling.classList.remove("show-text");
    }

    if(!validEmail || !validPassword) return;

});
