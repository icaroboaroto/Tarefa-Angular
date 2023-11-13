import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class CalculadoraComponent {
  numero1;
  numero2;
  operacao = '+';
  resultado = null;

  calcular() {
    const expressao = `${this.numero1} ${this.operacao} ${this.numero2}`;
    this.resultado = eval(expressao);
  }
}
