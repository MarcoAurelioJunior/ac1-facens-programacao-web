import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {

  segurado = {
    nome: '',
    sobrenome: '',
    sexo: '',
    idade: 0,
    valor: 0
  };

  valorApolice: number | null = null;

  calcularApolice() {
    const valor = Number(this.segurado.valor);
    const idade = Number(this.segurado.idade);

    if (this.segurado.sexo === 'M' && idade <= 25) {
      this.valorApolice = valor + (valor * 0.15);
    } else if (this.segurado.sexo === 'M' && idade > 25) {
      this.valorApolice = valor + (valor * 0.10);
    } else if (this.segurado.sexo === 'F') {
      this.valorApolice = valor + (valor * 0.08);
    } else {
      this.valorApolice = null;
    }
  }

}
