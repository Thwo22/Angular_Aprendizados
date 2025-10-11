import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animalDetails = '';

  animals: Animal[]= [
    {name: "Aiko", type: "Cat", pelagem: "Branca e cinza", age: 2},
    {name: "Shy", type: "Cat", pelagem: "Branca e creme", age: 1},
    {name: "Babidi", type: "Cat", pelagem: "Rajado", age: 0.5}
  ]

  showAge(animal: Animal){
    this.animalDetails =  `o pet ${animal.name} tem ${animal.age} anos!`
  }
}
