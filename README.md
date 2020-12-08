# Real time form validation 

The form check in real time input fields based on `regEx`, if the values are correct the form can be submitted.
`RegExs` are fetched from an API.

**Technologies**: `JavaScript Vanilla`, `Grunt`, `Less` and `ITCSS` architecture, `Jest` ( for testing ).

**Run Grunt task:** `npm start`

* **Form fields**:
  - name: text only, no case sensitive
  - surname: text only, no case sensitive
  - email: alphanumeric, no case sensitive must contain `@` symbol and domain name
  - phone: can contain `+` (only in front of the number) and `space` characters and numbers only
  - password: must be at least 8 long and contain at least 1 special character
* Display error messages for each invalid field in real time
* All fields are required and needs to be valid before form can be submitted
  
**Hosting:** Firebase - https://form-validation-eadaa.web.app/
**API:** https://form-and-plp-backend.herokuapp.com/