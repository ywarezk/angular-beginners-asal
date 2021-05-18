# Typescript and Javascript

Angular was built using typescript.  
So we have to learn typescript before diving in on angular

## What is typescript

Typescript is a programming language.  
Typescript compiles to Javascript.  

```
               tsc
some-file.ts --------> some-file.js -----> Browser

```

## Hello world

```
> npx tsc hello.ts
```

- bunch of errors are thrown from the runtime to compile time
- production compile / build - concat files and minify them
- compile the code to older version and support older browsers
- using experimental unreleased feature of javascript
- !!!! extends the javascript to add static features

## About typescript

- Developed by microsoft
- typescript is open sourced
- Angular is build with typescript
- 

## How do I compile the code

instructions how to compile the code.  
`tsconfig.json`  

```
> npx tsc --init
// compile all the files that ends with .ts extension
> npx tsc
> npx tsc -w
```



## Lesson Plan

- installing typescript
- running with the debugger
- declaring variables
- functions
- oop
- decorators
- modules

## EX.

- create an empty directory
- in that directory initiate npm using the command:

```
> npm init --yes
```

- Using npm, install typescript.
- create a `tsconfig.json` file using the command 

```
> tsc --init
```

- In the `tsconfig.json` set the `sourceMaps` to `true`

- create two typescript files `main.ts`, `hello.ts`
- `hello.ts` should export a function which prints hello world to the console
- `main.ts` should import the function from `hello.ts` and call that function
- compile your code using the command:

```
> tsc -w
```

- Use visual studio code to run the file `main.ts`, make sure to place a breakpoint and run with the debugger.

