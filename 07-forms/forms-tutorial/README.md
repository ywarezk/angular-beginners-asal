# @angular/forms

contains the tools of the framework for dealing with forms

## Understand the structure of the form you are creating

### Name form

- group
  - form control
  
###  Login

form -> email, password 

- group
  - form control - email
  - form control - password
  
### Register

form -> email, password, repeat password

- group
  - form control - email
  - sub group - validation together
    - form control - password
    - form control - repeat password  
    
## Buy something

- group
  - group - address
    - control - country
    - control - city
  - group - payment
    - control - credit card
    - cvv
  - array
    - group - phone number
      - control - prefix
      - control - main number
    - group - phone number
      - control - prefix
      - control - main number
  
## for the structure

- control - `FormControl`
- group - `FormGroup`
- array - `FormArray`

## Build your app

```bash
> npx ng build --prod
```

  ## EX.
  
  - create a `FormGroup` for your login form
  - that `FormGroup` need to contain 2 form control for email and password
  - in the submit event (use: `(ngSubmit)`) react to user submitting the form
  - and send the value of the `FormGroup`
  - you can also validate a group of controls:
    - Register component
    - `FormGroup`
      - email - `FormControl`
      - `FormGroup`
        - password - `FormControl`
        - repeat - `FormControl`
  - try to add validation for the login form
    - email - email format, required
    - password - required, minLength
    - display errors if the validation fails
  - read the following guide: https://angular.io/guide/forms
