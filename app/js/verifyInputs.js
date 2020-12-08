import { setErrorFor, setSuccessFor } from './set.js';

function emptyInputs(inputField, inputsErrorsObj ) {
    for(var i = 0; i < inputsErrorsObj.length; i++) {
        if(inputField.name === inputsErrorsObj[i].inputName) {
            inputField.value === '' ? setErrorFor(inputField, inputsErrorsObj[i].errorEmptyMessage) : null;
        }
    }
}

function verifyRegEx(inputField, regEx, inputsErrorsObj) {
    var regExInputFieldName = regEx[inputField.name];
    for(var i = 0; i < inputsErrorsObj.length; i++) {
        if(inputField.name === inputsErrorsObj[i].inputName) {
            if(inputsErrorsObj[i].changeToLowercase) {
                regExInputFieldName.test(inputField.value.toLowerCase()) ? setSuccessFor(inputField) : setErrorFor(inputField, inputsErrorsObj[i].errorMessage)
            } else {
                regExInputFieldName.test(inputField.value) ? setSuccessFor(inputField) : setErrorFor(inputField, inputsErrorsObj[i].errorMessage)

            }
        }

        if(inputField.name === 're-password') {
            var passwordValue = document.getElementById('password').value;
            (inputField.value === passwordValue && regExInputFieldName.test(inputField.value)) ? setSuccessFor(inputField) : setErrorFor(inputField, inputsErrorsObj[i].errorMessage)
        }
    };
}

export {verifyRegEx, emptyInputs}