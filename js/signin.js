var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var password = document.getElementById("password");
var passwordError = document.getElementById("password-error");

function validate(){
    if(email_validate()){
        if(password_validate()){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function email_validate() {
    let emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
        emailError.innerHTML = "<label><small>Valid Email</small></label>";
        emailError.style.color = "#16C79A";
        return true;
    } else {
        emailError.innerHTML = "<label><small>Invalid Email</small></label>";
        emailError.style.color = "#FF5151";
        return false;
    }
}

function password_validate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            passwordError.innerHTML = "<label><small>Password correct.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #16C79A";
            return true;
        } else {
            passwordError.innerHTML = "<label><small>Password incorrect.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #FF5151";
            return false;        
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Invalid</small></label>";
        passwordError.style.color = "#FF5151"
        password.style.border = "2px solid #FF5151";
        return false;
    }

}