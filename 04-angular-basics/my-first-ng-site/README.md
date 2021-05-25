# Angular Basics

Basic introduction of the building block in angular application

## @angular/cli

used to start a new angular website - Single Page Application - SPA.  
Fast website where the dom is mostly created with JS.  

To start a new angular project

```
> npx @angular/cli new <project name>
```

## Run a development server

```
> npx ng serve
```

## Components

these are the main building block of out angular app.  
UI blocks that angular will take and draw part of our ui from our components.  
Angular will also keep them updated

## create a new component

```
> cd src/app
> npx ng generate component Header
```

## component tree

                  app-root
                  
    <footer>           <login>           <app-header>
    
                                              <app-nav>
                                              
      
      
## Module

Module is like a library.  
It contains components, other angular architecture stuff.  
Split your app to modules using seperation of concerns.  

/settings/user
/settings/account
/settings/dashboard

 ```
 > npx ng g m ../Auth
 ```
                                      
## Summary

- you create the ui using components
- you place the components in modules
- you create services for your business logic
- you inject those services using the DI
- you attach repeating behaviour on template items using directives.

## Lesson Plan

- @angular/cli
- hello world
- What is a component
- generating a component with the cli
- Styling our components


## Ex.

In this ex you will create a login page using angular.  
You can use elements from the previous login ex where we used HTML and CSS to create a login page.  

- Start a new project using `@angular/cli`
- Under the `AppComponent` create the following components using `@angular/cli`
- `HeaderComponent`
- `LoginComponent`
- `FooterComponent`

## EX. Login

- binding to the submit event of the form
- binding to the input event of the email and password
- whenever you submit the login form: print the email and passwrod to the console
- Try to create an `Auth` module
  - the `LoginComponent` will belong to the `AuthModule` while the `HeaderComponent, FooterComponent` will belong to the `AppModule`
- Try to install @angular/material and use the following components:
  - Button
  - Text fields
  - Toolbar for header
- create a `TodoListComponent` that grabs the todo list from this server: https://nztodo.herokuapp.com/api/tasks/?format=json
- when the user submits the login form, send a request to server with the email and password that the user entered

```typescript
// _http: HttpClient
this._http
  .post('https://academeez-login-ex.herokuapp.com/api/users/login', 
  {email: 'yariv@nerdeez.com', 'password': '12345678'})
  
  { token: 'sdfasdfasdfasdfasdf'}
```

print the object to the console


