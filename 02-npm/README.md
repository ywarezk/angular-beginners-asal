# NPM

Node Package Manager
We use this tool to install packages.

what we can npm for

- Install packages / community packages
- version management of our packages
- publish packages

## Initiating npm in this folder

```
> npm init --yes
```

## Installing a package

```
> npm install @angular/core
```

## From where is the package installed?

```
> npm get registry
```

do this command to set the packages to be installed from your company

```
> npm set registry <npm server>
```

## Install typescript

```
> npm i typescript -D
```

## Install all packages in package-lock

```
> npm install
```

## uninstall

```
> npm uninstall <package-name>
```

## publish a package to npm

```
> npm publish
```

## NPX

Node package executer

look for the node_modules and execute from the `.bin` folder

```
> npx tsc -v
```

I will look for node modules and run the tsc script from the .bin folder


## what will npx do if it doesn't find a node_modules directory

if the library does not exist

npx will do the following

```
> npm install -g tsc
> run tsc from the global installation
> npm uninstall -g tsc
```

## the problem with global installations

```
npm install typescript -g
```

## @angular/cli

```
npx @angular/cli new <my project name>
```

```
> npm i @angular/cli -g
> ng new <my project>
```


