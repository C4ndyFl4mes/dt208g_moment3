import { Component } from '@angular/core';
import { TempconvertComponent } from '../../partials/tempconvert/tempconvert.component';
import { LengthconvertComponent } from '../../partials/lengthconvert/lengthconvert.component';

@Component({
  selector: 'app-convert',
  imports: [TempconvertComponent, LengthconvertComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

}
