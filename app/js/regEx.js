//Take regEx from the backend and create a valid regEx for JS
export default function createRegEx(regEx) {

    return {
        'name': new RegExp(regEx.name),
        'surname': new RegExp(regEx.name),
        'email': new RegExp(regEx.email),
        'phone': new RegExp(regEx.phone),
        'password': new RegExp(regEx.password),
        're-password': new RegExp(regEx.password)
    }
}

// module.exports = createRegEx;
