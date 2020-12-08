const createRegEx = require('../app/js/regEx');


// When we want to run a test we'll have to change in regEx.js
// from 'export default' to 'module.exports = createRegEx',
// because Jest expects a module.
test('Verify if the createRegEx function returns an object with valid regexes', function () {

var regExValues = {
    "name": "^[A-Za-z]+$",
    "email": "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",
    "phone": "(^\\+?)[0-9\\s]{10,16}$",
    "password": "[Aa-zZ0-9](?=.*[!@#$%^&*])[\\w!@#$%^&*]{7,}$"
}

expect(createRegEx(regExValues)).toEqual({
    'name': new RegExp(regExValues.name),
    'surname': new RegExp(regExValues.name),
    'email': new RegExp(regExValues.email),
    'phone': new RegExp(regExValues.phone),
    'password': new RegExp(regExValues.password),
    're-password': new RegExp(regExValues.password)
})

})
