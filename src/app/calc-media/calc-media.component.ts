import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  templateUrl: './calc-media.component.html',
  styleUrl: './calc-media.component.css'
})
export class CalcMediaComponent {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  media: number = 0;

  calcularMedia(): void {
    this.media = ((this.nota1*0.15) + (this.nota2*0.30) + (this.nota3*0.10) + (this.nota4*0.45));
  }

}
