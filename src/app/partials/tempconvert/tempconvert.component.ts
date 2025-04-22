import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempconvert',
  imports: [FormsModule],
  templateUrl: './tempconvert.component.html',
  styleUrl: './tempconvert.component.scss'
})
export class TempconvertComponent {
  celsius: number = 0;
  fahrenheit: number = 32;
  kelvin: number = 273;

  convertFromC():void {
    this.fahrenheit = Math.round(this.celsius * 1.8 + 32);
    this.kelvin = Math.round(this.celsius + 273.15);
  }

  convertFromF():void {
    this.celsius = Math.round((this.fahrenheit - 32) / 1.8);
    this.kelvin = Math.round((this.fahrenheit - 32) / 1.8 + 273.15);
  }

  convertFromK():void {
    this.celsius = Math.round(this.kelvin - 273.15);
    this.fahrenheit = Math.round((this.kelvin - 273.15) * 1.8 + 32);
  }
}
