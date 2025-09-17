import { Component } from '@angular/core';

@Component({
  selector: 'app-conv-temp',
  templateUrl: './conv-temp.component.html',
  styleUrl: './conv-temp.component.css'
})
export class ConvTempComponent {

  celsius: number | null = null;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converterDeCelsius() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
      this.kelvin = Number(this.celsius) + 273.15;
    } else {
      this.fahrenheit = null;
      this.kelvin = null;
    }
  }

}
