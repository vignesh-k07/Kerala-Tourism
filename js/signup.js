var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var password = document.getElementById("password");
var retypePassword = document.getElementById("retype-password");
var passwordError = document.getElementById("password-error");
var retypePasswordError = document.getElementById("retype-password-error");



function validate() {
    if(email_validate()){
        if(phone_validate()){
            if(password_validate()){
                if(password_match_checker()){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
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

function phone_validate() {
    let phoneFormat0 = /^[0-9]{10}$/;
    let phoneFormat1 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let phoneFormat2 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let phoneFormat3 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    if (phoneFormat0.test(phone.value) || phoneFormat1.test(phone.value) || phoneFormat2.test(phone.value) || phoneFormat3.test(phone.value)) {
        phoneError.innerHTML = "<label><small>Valid Phone Number</small></label>";
        phoneError.style.color = "#16C79A";
        return true;
    } else {
        phoneError.innerHTML = "<label><small>Invalid Phone Number</small></label>";
        phoneError.style.color = "#FF5151";
        return false;
    }

}

function password_validate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            if (password.value.length == 8) {
                passwordError.innerHTML = "<label><small>Password Strength: Poor</small></label>";
                passwordError.style.color = "#FF5151"
                password.style.border = "2px solid #FF5151";
                return false;
            } else if (password.value.length > 8 && password.value.length < 12) {
                passwordError.innerHTML = "<label><small>Password Strength: Medium</small></label>";
                passwordError.style.color = "#FFAB4C"
                password.style.border = "2px solid #FFAB4C";
                return false;
            } else if (password.value.length > 12) {
                passwordError.innerHTML = "<label><small>Password Strength: Strong</small></label>";
                passwordError.style.color = "#16C79A"
                password.style.border = "2px solid #16C79A";
                return true;
            }
        } else {
            passwordError.innerHTML = "<label><small>Password must contain at least 8 characters, one uppercase, one lowercase, one number.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #FF5151";
            return false;
            return false;
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Too Short.</small></label>";
        passwordError.style.color = "#FF5151"
        password.style.border = "2px solid #FF5151";
        return false;
    }

}

function password_match_checker() {
    if (password.value === retypePassword.value) {
        retypePasswordError.innerHTML = "<label><small>Password match.</small></label>";
        retypePasswordError.style.color = "#16C79A"
        retypePassword.style.border = "2px solid #16C79A";
        return true;
    }
    else{
        retypePasswordError.innerHTML = "<label><small>Password didn't match.</small></label>";
        retypePasswordError.style.color = "#FF5151"
        retypePassword.style.border = "2px solid #FF5151";
        return false;
    }
}