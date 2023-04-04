import {validate} from 'validate.js';

const validateString = (id,value) => {
    const constraints = { presence : {allowEmpty:false}};
    if(value !== ''){
        constraints.format = {
            pattern: "[a-z]+",
            flags: "i",
            message: 'can only contain a-z letters'
        }
    }

    const validationResult = validate({ [id] : value}, { [id] : constraints });

    return validationResult && validationResult[id];
}

const validateEmail = (id,value) => {

    const constraints = { presence : {allowEmpty:false}};
    if(value !== ''){

        constraints.email = true

    }

    const validationResult = validate({ [id] : value },{ [id] : constraints });

    return validationResult && validationResult[id];


}

const validatePassword = (id,value) => {

    const constraints = { presence : {allowEmpty:false}};
    if(value !== ''){

        constraints.length = {
            minimum:6,
            message: 'must be at least 6 characters'
        }

    }

    const validationResult = validate({ [id] : value },{ [id] : constraints });

    return validationResult && validationResult[id];


}

export {validateString,validateEmail,validatePassword}