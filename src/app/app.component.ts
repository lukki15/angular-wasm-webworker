import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-wasm-webworker';

  isRunning = false;

  jsTime?: number;
  jsWebworkerTime?: number;
  wasmWebworkerTime?: number;

  angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.angForm = this.fb.group({
      inputNumber: [42, Validators.compose([
        Validators.required, AppComponent.onlyPositives ]) ]
   });
  }

  static onlyPositives(control: AbstractControl): { [key: string]: any; } | null {
    if (Number(control.value) < 0) {
      return {nonZero: true};
    } else {
      return null;
    }
  }

  private fibonacci_js(n: number): number {
    if (n < 0) {
      return 0;
    }
    if (n < 2) {
      return n;
    }

    return this.fibonacci_js(n - 1) + this.fibonacci_js(n - 2);
  }

  clickJsButton(): void {
    if (this.angForm.invalid){
      return;
    }

    this.isRunning = true;
    setTimeout(() => {
      const t0 = performance.now();
      this.fibonacci_js(this.angForm.value.inputNumber as number).toString();
      const t1 = performance.now();
      this.jsTime = t1 - t0;
      this.isRunning = false;
    }, 50);
  }
}
