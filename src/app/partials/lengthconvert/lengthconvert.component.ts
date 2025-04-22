import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lengthconvert',
  imports: [FormsModule],
  templateUrl: './lengthconvert.component.html',
  styleUrl: './lengthconvert.component.scss'
})
export class LengthconvertComponent {
  // SI
  meter: number = 0;
  cMeter: number = 0;
  mMeter: number = 0;

  // IU
  mile: number = 0;
  feet: number = 0;
  inch: number = 0;

  // Constants from mm to:
  mmInAMile: number = 1609344;
  mmInAFeet: number = 304.8;
  mmInAnInch: number = 25.4;

  convertToImperial(): void {
    const totalLengthInMM: number = this.meter * 1000 + this.cMeter * 100 + this.mMeter;
    this.mile = Math.floor(totalLengthInMM / this.mmInAMile);
    const rem1 = totalLengthInMM % this.mmInAMile;

    this.feet = Math.floor(rem1 / this.mmInAFeet);
    const rem2 = rem1 % this.mmInAFeet;

    this.inch = Math.floor((rem2 / this.mmInAnInch) * 100) / 100;
    
  }
}
