import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-wasm-webworker';

  isRunning = false;

  jsTime = 0;
  jsWebworkerTime = 0;
  wasmWebworkerTime = 0;

  fibonacci_js(n: number): number {
    if (n < 0) {
      return 0;
    }
    if (n < 2) {
      return n;
    }

    return this.fibonacci_js(n - 1) + this.fibonacci_js(n - 2);
  }

  clickJsButton() {
    this.isRunning = true;
    setTimeout(() => {
      const t0 = performance.now();
      this.fibonacci_js(42).toString();
      const t1 = performance.now();
      this.jsTime = t1 - t0;
      this.isRunning = false;
    }, 50);
  }
}
