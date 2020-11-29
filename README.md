# Angular Wasm Webworker

This project demonstrates how WebAssembly can be integrated into Angular by using Webworker. The example code is written in C++ and compiled to WebAssembly using Emscripten.

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
