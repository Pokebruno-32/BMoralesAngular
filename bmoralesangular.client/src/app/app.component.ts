import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
class Calculadora {
  numero1: number;
  numero2: number;

  constructor(numero1: number, numero2: number) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  Suma() {
    return this.numero1 + this.numero2;
  }
  Resta() {
    return this.numero1 - this.numero2;
  }
  Multiplicacion() {
    return this.numero1 * this.numero2;
  }
  Division() {
    return this.numero1 / this.numero2;
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  calculadora = new Calculadora(10, 2);
  resultado?: number;
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'pruebaangular.client';
}
