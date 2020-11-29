# Angular Wasm Webworker

This project demonstrates how WebAssembly can be integrated into Angular by using Webworker. The example code is written in C++ and compiled to WebAssembly using Emscripten.

## Demo

Take a look at it: [link](https://lukki15.github.io/angular-wasm-webworker/)

## Build

To build the demo, run the following commands:

```bash
$ npm install
$ ng serve
```

Then open your prefered browser and go to `http://localhost:4200`

The CPP is already precompiled, but if you want to compile it again just run install Emscripten:

```bash
$ npm run build:wasm
```

## Deploy

I used [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) to deply my Angular app to GitHup pages directly from the Angular CLI

Add `angular-cli-ghpages` to the project

```bash
$ ng add angular-cli-ghpages
```

Deploy the project to GitHub pages with all default settings

```bash
$ ng deploy --base-href=/angular-wasm-webworker/
```
