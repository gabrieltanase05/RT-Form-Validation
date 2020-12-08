import createRegEx from './regEx.js'
import { setErrorFor, setSuccessFor } from './set.js';
import { emptyInputs, verifyRegEx } from './verifyInputs.js';
import { inputErrorMessagesArray } from './constants.js';

//Send a GET Request to server for RegExp
var responseObject ;
var regEx;
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if(this.status == 200) {
        try {
            responseObject = JSON.parse(this.responseText);
            regEx = createRegEx(responseObject);
        } catch(e) {
            console.log('ERROR: ' + e);
        }
    } else {
        alert('Server is not responding with status: 200!');
        document.querySelector('form').style.display='none';
    }
}
xhr.open('get', 'https://form-and-plp-backend.herokuapp.com/api/regEx');
xhr.send()

document.addEventListener("DOMContentLoaded", function(e) {
    var inputs = document.querySelectorAll('input');
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            verifyRegEx(this, regEx, inputErrorMessagesArray);
        })
    }
    var submit = document.querySelector("form");
    submit.addEventListener("submit", function(e) {
        for(var i = 0; i < inputs.length; i++) {
            emptyInputs(inputs[i], inputErrorMessagesArray);
        }
        var errors = document.querySelectorAll('.c-errors');
        var errLength = 0;
        for(var i = 0; i < errors.length; i++) {
            errLength = errLength + (errors[i].innerText.length);
        }
        if(errLength >= 1) {
            return e.preventDefault();
        }
    })
});

