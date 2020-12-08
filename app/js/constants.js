let inputErrorMessagesArray = [
    {
        'inputName': 'name',
        'errorMessage': 'First name must contain alphabetic characters only!',
        'errorEmptyMessage': 'First name field cannot be empty!',
        'changeToLowercase': true
    },
    {
        'inputName': 'surname',
        'errorMessage': 'Last name must contain alphabetic characters only!',
        'errorEmptyMessage': 'Last name field cannot be empty!',
        'changeToLowercase': true
    },
    {
        'inputName': 'email',
        'errorMessage': 'Email must contain \'@\' and domain name (ex: .com)!',
        'errorEmptyMessage': 'Email field cannot be empty!',
        'changeToLowercase': true
    },
    {
        'inputName': 'phone',
        'errorMessage': 'Phone must have at least 10 numbers, optional + (in the front) and spaces!',
        'errorEmptyMessage': 'Phone field cannot be empty!',
        'changeToLowercase': false
    },
    {
        'inputName': 'password',
        'errorMessage': 'Password must have 8 long and at least 1 special character!',
        'errorEmptyMessage': 'Password field cannot be empty!',
        'changeToLowercase': false
    },
    {
        'inputName': 're-password',
        'errorMessage': 'Re-password don\'t match!',
        'errorEmptyMessage': 'Repeat password field cannot be empty!',
        'changeToLowercase': false
    }
]

export { inputErrorMessagesArray };
