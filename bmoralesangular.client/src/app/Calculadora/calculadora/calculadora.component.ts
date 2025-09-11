import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }
  restar() {
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }
  dividir() {
    if (this.numero2 != 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      alert('Math Error');
    }
  }
}
