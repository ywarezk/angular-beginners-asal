# Angular Components

## Components communication

1. parent  <-> Childcomponent
3. communicating with services 

## EX.

1. LoginComponent gets an input of the url
2. LoginComponent has an event `(login)` if the user logged in successfully it will send it to the parent.
3. use `*ngIf` when the user logs in successfully use ngIf to display the message `you have been logged in`
4. disable the login submit button when the user submits the form.
5. try and remove the typed string from the email and password when the user logs in
6. try to use the `async` pipe for the `TodoList` component

```
<input [value]="email" />
```

