import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {

  pessoa = {
    peso: 0,
    altura: 0
  };

  imc: number | null = null;
  classificacao: string | null = null;

  calcImc() {
    const peso = this.pessoa.peso;
    const altura = this.pessoa.altura / 100;

    if (altura > 0) {
      this.imc = peso / (altura * altura);
      this.classificacao = this.getClassificacao(this.imc);
    }
  }

  private getClassificacao(imc: number | null): string | null {
    if (imc === null) return null;

    console.log(imc);

    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc > 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau II';
    } else if (imc >= 40) {
      return 'Obesidade grau III';
    } else {
      return 'Morto?';
    }
  }

}
