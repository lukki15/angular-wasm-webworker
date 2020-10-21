/// <reference lib="webworker" />

function fibonacci_js(n: number): number {
  if (n < 0) {
    return 0;
  }
  if (n < 2) {
    return n;
  }

  return fibonacci_js(n - 1) + fibonacci_js(n - 2);
}

addEventListener('message', ({ data }) => {
  const t0 = performance.now();
  fibonacci_js(data).toString();
  const t1 = performance.now();

  postMessage(t1 - t0);
});
