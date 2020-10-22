/// <reference lib="webworker" />

enum States {
  INIT,
  LOADING,
  LOADED
};

self['currentState'] = States.INIT;

loadScript("assets/wasm", "fibonacci.js").then(function () {
  self['currentState'] = States.LOADED;
  // we may safely use the Webassembly Module now!
});

addEventListener('message', ({ data }) => {
  if (self['currentState'] === States.LOADED) {
    const functionName = "fibonacciWASM";
    
    const t0 = performance.now();
    self['Module'][functionName](data);
    const t1 = performance.now();
    const diff = t1 - t0;
    console.log(diff);
    self.postMessage(diff);

  }
});

function loadScript(wasmPath: string, glueCodeName: string): Promise<void> {

  self['currentState'] = States.LOADING;

  self['Module'] = {
    locateFile: function (s: string) {
      return wasmPath + '/' + s; // load the .wasm file from the following Path
    }
  };

  return new Promise<void>((resolve, reject) => {
    self['Module']['onRuntimeInitialized'] = resolve; // when loaded resolve promise
    self.importScripts(wasmPath + '/' + glueCodeName); // load the wasm glue code, which loads the wasm binary itself
  });
}