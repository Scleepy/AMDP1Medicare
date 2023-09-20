//Too many cities to list, just a few have been selected
const cityArr = ["Surabaya", "Bekasi", "Bandung", "Medan", "Depok", "Tangerang", "Palembang", "Semarang", "Makassar", "Yogyakarta", "Bogor"];

const cityContainer = document.getElementById("city");

for(let city of cityArr){
    const newCity = document.createElement("option");
    newCity.innerText = city;
    newCity.value = city;

    cityContainer.appendChild(newCity);
}

let validateName = (name) => {
    if(name.length == 0) return false;

    return true;
}

let validEmailSymbols = (character) => { //only @ and .
    return (character >= 33 && character <= 45) || character == 47 || (character >= 58 && character <= 63) || (character >= 91 && character <= 96) || (character >= 123 && character <= 126);
}

let validateEmail = (email) => {

    if(!email.includes('@')) return false;

    let count = 0;

    for(let i = 0; i < email.length; i++) {
        if(email.charAt(i) == '@'){
            if(count < 1){
                count++;
            } else {
                return false;
            }
        }
    }

    if(!email.endsWith(".com")) return false;

    if(email.charAt(0) == "@" || email.charAt(0) == ".") return false;

    for(let i = 0; i < email.length; i++) {
        if (validEmailSymbols(email.charCodeAt(i))) return false;
    }

    let index = email.indexOf('@');
    let charCount = 0;

    while(index != email.length){

        if(index == email.indexOf('.')) break;

        charCount++;
        index++;
    }

    if(charCount == 1) return false;


    return true;
}

let validateCity = (city) => {
    if(city == "Select a City") return false;

    return true;
}

// 0 = 48
// 9 = 57

//capital : A = 65 Z = 90

let validatePassword = (password) => {

    let hasCapital = false;
    let hasEight = false;
    let hasNumber = false;

    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) hasNumber = true;
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) hasCapital = true;
    }

    if(password.length >= 8) hasEight = true;

    return hasCapital && hasEight && hasNumber;

}

let confirmBothPassword = (password, confirmPassword) => {

    if(password != confirmPassword) return false;

    return true;
}


const loginForm = document.getElementById("registerFormId");

loginForm.addEventListener("submit", (e) => {

    let validName = true;
    let validEmail = true;
    let validGender = true;
    let validPassword = true;
    let validConfirmPassword = true;

    e.preventDefault();

    const name = document.getElementById("inputRegisterName");

    if(!validateName(name.value)){
        name.nextElementSibling.classList.add("show-text");
        validName = false;
    } else {
        name.nextElementSibling.classList.remove("show-text");
    }

    const email = document.getElementById("inputRegisterEmail");

    if(!validateEmail(email.value)){
        email.nextElementSibling.classList.add("show-text");
        validEmail = false;
    } else {
        email.nextElementSibling.classList.remove("show-text");
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    let test = document.getElementById("radio-container");

    if(gender == null) {
        test.nextElementSibling.classList.add("show-text");
        validGender = false;
    } else {
        test.nextElementSibling.classList.remove("show-text");
    }

    if(!validateCity(cityContainer.value)){
        cityContainer.nextElementSibling.classList.add("show-text");
        validCity = false;
    } else {
        cityContainer.nextElementSibling.classList.remove("show-text");
    }

    const password = document.getElementById("inputRegisterPassword");

    if(!validatePassword(password.value)){
        password.nextElementSibling.classList.add("show-text");
        validPassword = false;
    } else {
        password.nextElementSibling.classList.remove("show-text");
    }

    const confirmPassword = document.getElementById("inputRegisterConfirmPassword");

    if(!confirmBothPassword(password.value, confirmPassword.value)){
        confirmPassword.nextElementSibling.classList.add("show-text");
        validConfirmPassword = false;
    } else {
        confirmPassword.nextElementSibling.classList.remove("show-text");
    }


    

});
