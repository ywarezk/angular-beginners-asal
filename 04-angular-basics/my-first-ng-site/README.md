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


