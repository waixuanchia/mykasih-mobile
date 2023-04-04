import {validateString,validateEmail,validatePassword} from '../validationConstraints';


const validateInput = (inputId,inputValue) => {
    if(inputId === "first_name" || inputId === "last_name"){

        return validateString(inputId,inputValue);

    }
    else if(inputId === "email"){

        return validateEmail(inputId,inputValue);

    }
    else if(inputId === "password"){

        console.log("password")

        return validatePassword(inputId,inputValue);
    }
}

export {validateInput}