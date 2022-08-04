const emailField = document.getElementById("email");
const emailError = document.getElementById("emailErrorMessage");
const passwordField = document.getElementById("password");
const passwordError = document.getElementById("passwordErrorMessage");
const loginButton = document.getElementById("login");

emailField.addEventListener("focusout",(event)=>{
    emailError.innerText = "";
    console.log("Input triggered");
    if(emailField.validity.typeMismatch){
        emailError.innerText = "Please type out a proper email address.";
        emailField.validationMessage = "";
        event.preventDefault();
    }
});
emailField.addEventListener("focus",()=>{
    emailError.innerText = "";
});
function validateMyForm(){
    if(emailField.validity.typeMismatch){
        return false
    }else{
        return true;
    }
}