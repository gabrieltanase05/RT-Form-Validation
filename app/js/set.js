//Set the right properties when the field validation fail
function setErrorFor(input, message) {
    input.classList.remove("u-valid");
    input.classList.add("u-error");
    input.nextElementSibling.innerText = message;
}
//Set the right properties when the field success
function setSuccessFor(input) {
    input.classList.remove("u-error");
    input.classList.add("u-valid");
    input.nextElementSibling.innerText = " ";
}

// module.exports =  setErrorFor
export { setErrorFor, setSuccessFor};