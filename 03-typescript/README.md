# Typescript and Javascript

Angular was built using typescript.  
So we have to learn typescript before diving in on angular

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

