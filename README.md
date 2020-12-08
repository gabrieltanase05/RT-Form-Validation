# Real time form validation 

The form check in real time input fields based on regEx, if the values are correct the form can be submitted.

Technologies: JavaScript Vanilla, Grunt, Less and ITCSS architecture

* Form fields:
  - name: text only, no case sensitive
  - surname: text only, no case sensitive
  - email: alphanumeric, no case sensitive must contain `@` symbol and domain name
  - phone: can contain `+` (only in front of the number) and `space` characters and numbers only
  - password: must be at least 8 long and contain at least 1 special character
* Display error messages for each invalid field in real time
* All fields are required and needs to be valid before form can be submitted
  
