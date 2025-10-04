import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Thiago";
  idade: number = 19;
  trabalho: string = "desenvolvedor Front End";
  hobbies = ["Programar", "Jogar", "ouvir música"];
  telefone = {
    marca: "xioami",
    modelo: "Redmi Note 14",
  };
  cartaDeMotorista = "não possuí uma habilitação"
}
