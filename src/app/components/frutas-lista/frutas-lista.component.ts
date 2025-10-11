import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frutas-lista',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './frutas-lista.component.html',
  styleUrl: './frutas-lista.component.css'
})
export class FrutasListaComponent {
  frutas = ['maça','banana','morango'];
}
